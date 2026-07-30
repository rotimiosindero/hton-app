(function(){
  const days = HTON_DATA.days;
  const stages = HTON_DATA.stages;
  const entries = HTON_DATA.entries;
  const gg = HTON_DATA.globalGrid; // {startHour, endHour, dayIndex, bands}
  const PX_PER_HOUR = 140;
  // The sticky stage-label column's width is owned by CSS (--label-w), and the
  // mobile media query shrinks it from 132px to 100px. Blocks and the ruler
  // follow the CSS automatically (they sit inside .lane / a margin-left'd
  // ruler), but the now-line is positioned in JS from the grid's left edge —
  // so a hardcoded 132 put the line 32px (~14 minutes) too far right on every
  // phone. Read the real value instead of keeping a second copy of it, and
  // re-read on each call so rotating the phone across the 600px breakpoint
  // stays correct.
  function labelW(){
    const v = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--label-w'));
    return Number.isFinite(v) ? v : 132;
  }

  const STAGE_COLORS = {
    'Derren Smart':'#C1441E','Pinters':'#8B5E34','Warehouse':'#9C7A3C','The Quarry':'#6E7B5C',
    'Pavilion':'#4F6B66','Earthling':'#D4A24E','Outburst':'#A8583F','Terminus':'#6B5B4A',
    'Stallions':'#5C6E7A','Gramophone':'#B3702E','Giant Steps':'#7A8B5E','The Orchard':'#5F7A6E',
    'The Armadillo':'#9E6B3F'
  };
  // The same tint-over-card-background approach reads very differently depending
  // on theme: on the dark card, 25%/60% already stands off the page clearly. On
  // the light card, those numbers land too close to the pale background to tell
  // favourited from normal, so light mode uses its own, stronger set.
  const BLOCK_ALPHA_DARK = 0.25, BLOCK_ALPHA_LIGHT = 0.32;
  const FAV_ALPHA_DARK = 0.6, FAV_ALPHA_LIGHT = 0.92;
  const BLOCK_BORDER_ALPHA_DARK = 0.5, BLOCK_BORDER_ALPHA_LIGHT = 0.6;
  const FAV_BORDER_ALPHA_DARK = 0.5, FAV_BORDER_ALPHA_LIGHT = 1;
  const FAV_TEXT_LIGHT = '#FBF4E8'; // forced cream in light mode once the favourited fill gets this dark
  function isLightTheme(){
    const override = document.documentElement.getAttribute('data-theme');
    if(override) return override === 'light';
    return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches);
  }
  function hexToRgba(hex, alpha){
    const n = parseInt(hex.slice(1), 16);
    const r = (n>>16)&255, g=(n>>8)&255, b=n&255;
    return `rgba(${r},${g},${b},${alpha})`;
  }

  const FAV_STARS = {1:'***', 2:'**', 3:'*'};
  const FAV_LABELS = {1:'Must see', 2:'Could see', 3:'Clash backup'};

  let searchTerm = '';
  let favorites = {};

  // ---------- Favourites (persistent via localStorage) ----------
  const FAVORITES_KEY = 'houghton-favorites-v1';
  function entryKey(e){ return `${e.day}__${e.stage}__${e.begin}__${e.name}`; }
  function loadFavorites(){
    try{
      favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY) || '{}');
    }catch(err){
      favorites = {};
    }
  }
  function saveFavorites(){
    try{ localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites)); }
    catch(err){ console.error('Could not save favourites', err); }
  }

  // global minute, continuous from Thursday 00:00, across all four days
  function globalMin(day, t){
    const [h,m] = t.split(':').map(Number);
    let v = h*60+m;
    if (h < 9) v += 24*60;
    return gg.dayIndex[day]*1440 + v;
  }

  // Real festival dates, so "now" can be placed on the same timeline as the
  // entries above. Hours before 9am count as belonging to the previous
  // festival day's overnight session, matching globalMin's own rule.
  const FESTIVAL_DATES = {
    'Thursday': [2026, 7, 6],
    'Friday':   [2026, 7, 7],
    'Saturday': [2026, 7, 8],
    'Sunday':   [2026, 7, 9]
  };
  function nowGlobalMin(){
    const now = new Date();
    const bucketDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const h = now.getHours(), m = now.getMinutes();
    let extra = 0;
    if(h < 9){
      bucketDate.setDate(bucketDate.getDate() - 1);
      extra = 24*60;
    }
    let matchedDay = null;
    for(const d of days){
      const [fy, fm, fd] = FESTIVAL_DATES[d];
      if(bucketDate.getFullYear()===fy && bucketDate.getMonth()===fm && bucketDate.getDate()===fd){
        matchedDay = d;
        break;
      }
    }
    if(!matchedDay) return null;
    return gg.dayIndex[matchedDay]*1440 + h*60 + m + extra;
  }

  const totalHours = gg.endHour - gg.startHour;
  const timelineWidth = totalHours * PX_PER_HOUR;

  function hourToX(h){ return (h - gg.startHour) * PX_PER_HOUR; }

  // ---------- Now / Day / My Schedule / About tabs ----------
  const dayTabs = document.getElementById('dayTabs');
  const scheduleView = document.getElementById('scheduleView');
  const artistsView = document.getElementById('artistsView');
  const mapView = document.getElementById('mapView');
  const aboutView = document.getElementById('aboutView');

  // Keep in sync with CACHE_NAME in sw.js — there's no build step to share a
  // single source of truth, so this just gets bumped alongside it by hand.
  const APP_VERSION = '1.1.3';

  // Tracks which top-level view is showing, so the title button (goToNow)
  // and the now-line know whether "now" means the main grid or My Hton's
  // favourites-only timetable.
  let currentView = 'grid';

  function showGridView(){
    currentView = 'grid';
    document.getElementById('gridScroll').style.display = '';
    scheduleView.style.display = 'none';
    artistsView.style.display = 'none';
    mapView.style.display = 'none';
    aboutView.style.display = 'none';
    myScheduleBtn.classList.remove('active');
    artistsBtn.classList.remove('active');
    mapBtn.classList.remove('active');
    aboutBtn.classList.remove('active');
    // Restore whichever day tab matches the grid's current scroll position —
    // it may have been cleared while another tab (My Hton/Artists/About) was
    // showing, or the scroll position may have changed underneath us (e.g.
    // the "quick return" back button restoring a saved scrollLeft).
    setActiveDayTab(currentGridDay());
    // The grid was possibly display:none a moment ago (while My Hton or About
    // was showing), and a hidden element's scrollHeight reads as 0 — without
    // this, the now-line can be stuck at zero height until the next 30s tick.
    renderNowLine();
  }
  function showScheduleView(){
    currentView = 'schedule';
    document.getElementById('gridScroll').style.display = 'none';
    scheduleView.style.display = 'flex';
    artistsView.style.display = 'none';
    mapView.style.display = 'none';
    aboutView.style.display = 'none';
    myScheduleBtn.classList.add('active');
    artistsBtn.classList.remove('active');
    mapBtn.classList.remove('active');
    aboutBtn.classList.remove('active');
    updateScheduleDayHighlight();
    renderNowLine();
  }
  function showArtistsView(){
    currentView = 'artists';
    document.getElementById('gridScroll').style.display = 'none';
    scheduleView.style.display = 'none';
    artistsView.style.display = 'flex';
    mapView.style.display = 'none';
    aboutView.style.display = 'none';
    myScheduleBtn.classList.remove('active');
    artistsBtn.classList.add('active');
    mapBtn.classList.remove('active');
    aboutBtn.classList.remove('active');
    setActiveDayTab(null);
    buildArtistsList();
  }
  function showMapView(){
    currentView = 'map';
    document.getElementById('gridScroll').style.display = 'none';
    scheduleView.style.display = 'none';
    artistsView.style.display = 'none';
    mapView.style.display = 'flex';
    aboutView.style.display = 'none';
    myScheduleBtn.classList.remove('active');
    artistsBtn.classList.remove('active');
    mapBtn.classList.add('active');
    aboutBtn.classList.remove('active');
    setActiveDayTab(null);
  }
  function showAboutView(){
    currentView = 'about';
    document.getElementById('gridScroll').style.display = 'none';
    scheduleView.style.display = 'none';
    artistsView.style.display = 'none';
    mapView.style.display = 'none';
    aboutView.style.display = 'flex';
    myScheduleBtn.classList.remove('active');
    artistsBtn.classList.remove('active');
    mapBtn.classList.remove('active');
    aboutBtn.classList.add('active');
    setActiveDayTab(null);
    document.getElementById('appVersionLabel').textContent = APP_VERSION;
  }

  function scrollGridToNow(gridScrollEl){
    const nowMin = nowGlobalMin();
    if(nowMin === null){
      setDetail('Outside the festival dates — showing the start of Thursday');
      gridScrollEl.scrollTo({left: 0, behavior:'smooth'});
      return;
    }
    const targetX = hourToX(nowMin/60) + labelW();
    gridScrollEl.scrollTo({left: Math.max(targetX - 120, 0), behavior:'smooth'});
  }

  function goToNow(){
    if(currentView === 'schedule'){
      showScheduleView();
      applyScheduleMode('timetable');
      try{ localStorage.setItem(SCHEDULE_MODE_KEY, 'timetable'); }
      catch(err){ console.error('Could not save schedule view preference', err); }
      scrollGridToNow(document.getElementById('scheduleGridScroll'));
    } else {
      showGridView();
      scrollGridToNow(document.getElementById('gridScroll'));
    }
  }

  document.getElementById('pageTitle').addEventListener('click', goToNow);

  const dayTabButtons = {};

  function setActiveDayTab(activeDay){
    days.forEach(d => dayTabButtons[d].classList.toggle('active', d === activeDay));
  }

  // Which day's band a given horizontal scroll position falls in — used both
  // right after a day-tab click and continuously while the user free-scrolls,
  // so the highlighted tab always matches what's actually in view rather than
  // just whichever tab was last clicked. Shared by the main grid and My
  // Hton's Timetable sub-view, which use the same hour-to-pixel timeline.
  function dayAtScrollLeft(scrollLeftPx){
    const h = gg.startHour + scrollLeftPx / PX_PER_HOUR;
    for(const d of days){
      if(h < gg.bands[d].end) return d;
    }
    return days[days.length - 1];
  }
  function currentGridDay(){
    return dayAtScrollLeft(document.getElementById('gridScroll').scrollLeft);
  }
  function currentScheduleGridDay(){
    return dayAtScrollLeft(document.getElementById('scheduleGridScroll').scrollLeft);
  }
  // My Hton keeps its own "My Hton" tab highlighted at all times; the day tab
  // lights up alongside it, but only while the Timetable sub-mode (which has
  // a per-day horizontal timeline like the main grid) is actually showing —
  // the List sub-mode has no per-day scroll position to reflect.
  function updateScheduleDayHighlight(){
    if(currentView !== 'schedule') return;
    const mode = document.querySelector('.schedule-toggle-btn.active')?.dataset.mode || 'list';
    setActiveDayTab(mode === 'timetable' ? currentScheduleGridDay() : null);
  }

  days.forEach(d=>{
    const btn = document.createElement('button');
    btn.className = 'tab';
    btn.textContent = d;
    btn.onclick = ()=>{
      showGridView();
      setActiveDayTab(d);
      const gs = document.getElementById('gridScroll');
      const targetX = hourToX(gg.bands[d].start) + labelW();
      gs.scrollTo({left: Math.max(targetX - 40, 0), behavior:'smooth'});
    };
    dayTabButtons[d] = btn;
    dayTabs.appendChild(btn);
  });

  const myScheduleBtn = document.createElement('button');
  myScheduleBtn.className = 'tab';
  myScheduleBtn.textContent = 'My Hton';
  myScheduleBtn.onclick = showScheduleView;
  dayTabs.appendChild(myScheduleBtn);

  const artistsBtn = document.createElement('button');
  artistsBtn.className = 'tab';
  artistsBtn.textContent = 'Artists';
  artistsBtn.onclick = ()=>{
    // A direct tab click (as opposed to following a block's name to its bio)
    // starts a fresh browse — any pending "back to where I was" no longer applies.
    artistReturnState = null;
    document.getElementById('artistBackBtn').style.display = 'none';
    showArtistsView();
  };
  dayTabs.appendChild(artistsBtn);

  const mapBtn = document.createElement('button');
  mapBtn.className = 'tab';
  mapBtn.textContent = 'Map';
  mapBtn.onclick = showMapView;
  dayTabs.appendChild(mapBtn);

  const aboutBtn = document.createElement('button');
  aboutBtn.className = 'tab';
  aboutBtn.textContent = 'About';
  aboutBtn.onclick = showAboutView;
  dayTabs.appendChild(aboutBtn);

  // ---------- Tab row scroll hints (fades + arrows showing there are more
  // tabs off-screen, e.g. "Artists"/"Map"/"About" scrolled out of view on a
  // narrow phone) ----------
  const tabsHintLeft = document.getElementById('tabsScrollHintLeft');
  const tabsHintRight = document.getElementById('tabsScrollHintRight');
  function updateTabsScrollHints(){
    const maxScroll = dayTabs.scrollWidth - dayTabs.clientWidth;
    tabsHintLeft.classList.toggle('visible', dayTabs.scrollLeft > 1);
    tabsHintRight.classList.toggle('visible', dayTabs.scrollLeft < maxScroll - 1);
  }
  dayTabs.addEventListener('scroll', updateTabsScrollHints);
  window.addEventListener('resize', updateTabsScrollHints);
  tabsHintLeft.addEventListener('click', ()=> dayTabs.scrollBy({left:-120, behavior:'smooth'}));
  tabsHintRight.addEventListener('click', ()=> dayTabs.scrollBy({left:120, behavior:'smooth'}));
  updateTabsScrollHints();

  const SCHEDULE_MODE_KEY = 'houghton-schedule-mode-v1';
  function applyScheduleMode(mode){
    document.querySelectorAll('.schedule-toggle-btn').forEach(b=>
      b.classList.toggle('active', b.dataset.mode === mode));
    document.getElementById('scheduleList').style.display = mode === 'timetable' ? 'none' : '';
    document.getElementById('scheduleGridScroll').style.display = mode === 'timetable' ? '' : 'none';
    // Same zero-height-while-hidden issue as showGridView/showScheduleView:
    // switching List -> Timetable makes scheduleGridInner visible for the
    // first time, so its now-line needs recalculating right away.
    if(mode === 'timetable') renderNowLine();
    updateScheduleDayHighlight();
  }
  document.querySelectorAll('.schedule-toggle-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      try{ localStorage.setItem(SCHEDULE_MODE_KEY, btn.dataset.mode); }
      catch(err){ console.error('Could not save schedule view preference', err); }
      applyScheduleMode(btn.dataset.mode);
    });
  });
  let savedScheduleMode = 'list';
  try{ savedScheduleMode = localStorage.getItem(SCHEDULE_MODE_KEY) || 'list'; }
  catch(err){ savedScheduleMode = 'list'; }
  applyScheduleMode(savedScheduleMode);

  // ---------- Map (pinch/scroll-to-zoom, drag-to-pan festival site map) ----------
  const mapViewport = document.getElementById('mapViewport');
  const mapImage = document.getElementById('mapImage');
  const MAP_MIN_SCALE = 1;
  const MAP_MAX_SCALE = 8;
  let mapScale = 1, mapX = 0, mapY = 0;

  function clampMapTransform(){
    const vw = mapViewport.clientWidth, vh = mapViewport.clientHeight;
    // #mapImage is width:100% (so its unscaled/base size always equals the
    // viewport's own box), which keeps this math independent of the image's
    // native pixel dimensions.
    const scaledW = vw * mapScale, scaledH = vw * mapScale;
    mapX = scaledW <= vw ? 0 : Math.min(0, Math.max(vw - scaledW, mapX));
    mapY = scaledH <= vh ? 0 : Math.min(0, Math.max(vh - scaledH, mapY));
  }
  function applyMapTransform(){
    mapImage.style.transform = `translate(${mapX}px, ${mapY}px) scale(${mapScale})`;
  }
  // Rescales around a fixed point (cursor position, pinch midpoint, or the
  // viewport centre for the toolbar buttons) so that point stays under the
  // finger/cursor instead of the image jumping around as it zooms.
  function zoomAt(clientX, clientY, targetScale){
    const rect = mapViewport.getBoundingClientRect();
    const ax = clientX - rect.left, ay = clientY - rect.top;
    const newScale = Math.min(MAP_MAX_SCALE, Math.max(MAP_MIN_SCALE, targetScale));
    const ix = (ax - mapX) / mapScale, iy = (ay - mapY) / mapScale;
    mapScale = newScale;
    mapX = ax - ix * mapScale;
    mapY = ay - iy * mapScale;
    clampMapTransform();
    applyMapTransform();
  }

  document.getElementById('mapZoomInBtn').addEventListener('click', ()=>{
    const r = mapViewport.getBoundingClientRect();
    zoomAt(r.left + r.width/2, r.top + r.height/2, mapScale * 1.6);
  });
  document.getElementById('mapZoomOutBtn').addEventListener('click', ()=>{
    const r = mapViewport.getBoundingClientRect();
    zoomAt(r.left + r.width/2, r.top + r.height/2, mapScale / 1.6);
  });
  document.getElementById('mapResetBtn').addEventListener('click', ()=>{
    mapScale = 1; mapX = 0; mapY = 0;
    applyMapTransform();
  });

  mapViewport.addEventListener('wheel', e=>{
    e.preventDefault();
    zoomAt(e.clientX, e.clientY, mapScale * Math.exp(-e.deltaY * 0.001));
  }, {passive:false});

  mapViewport.addEventListener('dblclick', e=>{
    zoomAt(e.clientX, e.clientY, mapScale > MAP_MIN_SCALE * 1.5 ? MAP_MIN_SCALE : 3);
  });

  // Pointer Events unify mouse/touch/pen and report every active touch by
  // its own pointerId, which is what makes tracking a two-finger pinch (as
  // opposed to just a single-finger pan) straightforward here.
  const mapPointers = new Map();
  let mapPanFrom = null, mapPinchDist = null;
  function pointerDist(a, b){ return Math.hypot(a.x - b.x, a.y - b.y); }

  mapViewport.addEventListener('pointerdown', e=>{
    mapViewport.setPointerCapture(e.pointerId);
    mapPointers.set(e.pointerId, {x: e.clientX, y: e.clientY});
    if(mapPointers.size === 1){
      mapPanFrom = {x: e.clientX, y: e.clientY};
    } else if(mapPointers.size === 2){
      const pts = [...mapPointers.values()];
      mapPinchDist = pointerDist(pts[0], pts[1]);
    }
  });
  mapViewport.addEventListener('pointermove', e=>{
    if(!mapPointers.has(e.pointerId)) return;
    mapPointers.set(e.pointerId, {x: e.clientX, y: e.clientY});
    if(mapPointers.size === 1 && mapPanFrom){
      mapX += e.clientX - mapPanFrom.x;
      mapY += e.clientY - mapPanFrom.y;
      mapPanFrom = {x: e.clientX, y: e.clientY};
      clampMapTransform();
      applyMapTransform();
    } else if(mapPointers.size === 2){
      const pts = [...mapPointers.values()];
      const dist = pointerDist(pts[0], pts[1]);
      const mid = {x: (pts[0].x + pts[1].x) / 2, y: (pts[0].y + pts[1].y) / 2};
      if(mapPinchDist) zoomAt(mid.x, mid.y, mapScale * (dist / mapPinchDist));
      mapPinchDist = dist;
    }
  });
  function endMapPointer(e){
    mapPointers.delete(e.pointerId);
    mapPinchDist = mapPointers.size === 2 ? mapPinchDist : null;
    mapPanFrom = mapPointers.size === 1 ? [...mapPointers.values()][0] : null;
  }
  mapViewport.addEventListener('pointerup', endMapPointer);
  mapViewport.addEventListener('pointercancel', endMapPointer);
  // Non-standard Safari-only events — the only reliable way to stop iOS's own
  // page-pinch-zoom gesture from also firing underneath our pointer handlers.
  mapViewport.addEventListener('gesturestart', e => e.preventDefault());
  mapViewport.addEventListener('gesturechange', e => e.preventDefault());

  window.addEventListener('resize', ()=>{ clampMapTransform(); applyMapTransform(); });

  // ---------- Theme (auto mirrors the OS, or manually forced light/dark) ----------
  const THEME_KEY = 'houghton-theme-v1';
  const themeColorDark = document.getElementById('themeColorDark');
  const themeColorLight = document.getElementById('themeColorLight');
  const DARK_BG = '#160D0A', LIGHT_BG = '#FAF3E6';
  function applyTheme(mode){
    if(mode === 'auto'){
      // No override: style.css's prefers-color-scheme media query takes over,
      // and each theme-color tag's own media attribute keeps browser chrome
      // in sync with the OS automatically, with no JS involved either.
      document.documentElement.removeAttribute('data-theme');
      themeColorDark.content = DARK_BG;
      themeColorLight.content = LIGHT_BG;
    } else {
      document.documentElement.setAttribute('data-theme', mode);
      // Force both tags to the same color so whichever one the browser
      // honours (based on its own OS-matching, ignoring our override) still
      // shows the right one.
      const forced = mode === 'dark' ? DARK_BG : LIGHT_BG;
      themeColorDark.content = forced;
      themeColorLight.content = forced;
    }
    document.querySelectorAll('.theme-toggle-btn').forEach(b=>
      b.classList.toggle('active', b.dataset.themeMode === mode));
  }
  document.querySelectorAll('.theme-toggle-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      try{ localStorage.setItem(THEME_KEY, btn.dataset.themeMode); }
      catch(err){ console.error('Could not save theme preference', err); }
      applyTheme(btn.dataset.themeMode);
      // Block fill/border alpha is baked into each block's inline style at
      // build time (it varies per-stage-colour, so it can't be pure CSS) —
      // re-run the builds so an already-open grid re-tints immediately
      // instead of waiting for the next favourite toggle or page load.
      build(); buildMyHtonGrid(); renderNowLine();
    });
  });
  let savedTheme = 'auto';
  try{ savedTheme = localStorage.getItem(THEME_KEY) || 'auto'; }
  catch(err){ savedTheme = 'auto'; }
  applyTheme(savedTheme);
  if(window.matchMedia){
    // Only matters in "auto": CSS re-themes the page either way, this just
    // keeps the block tint math (computed in JS, not CSS) in sync with it.
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', ()=>{
      if(!document.documentElement.getAttribute('data-theme')){
        build(); buildMyHtonGrid(); renderNowLine();
      }
    });
  }

  // ---------- Stage order (drag to rearrange in the About page, per-device) ----------
  const STAGE_ORDER_KEY = 'houghton-stage-order-v1';
  function loadStageOrder(){
    let saved = null;
    try{ saved = JSON.parse(localStorage.getItem(STAGE_ORDER_KEY) || 'null'); }
    catch(err){ saved = null; }
    if(!Array.isArray(saved)) return stages.slice();
    // Drop any stage no longer in the lineup, then append any new one (e.g.
    // next year's data.js adds a stage) that isn't in the saved order yet —
    // otherwise it would silently never appear in either grid.
    const known = saved.filter(s => stages.includes(s));
    const missing = stages.filter(s => !known.includes(s));
    return known.concat(missing);
  }
  let stageOrder = loadStageOrder();
  function saveStageOrder(){
    try{ localStorage.setItem(STAGE_ORDER_KEY, JSON.stringify(stageOrder)); }
    catch(err){ console.error('Could not save stage order', err); }
  }

  function renderStageOrderList(){
    const list = document.getElementById('stageOrderList');
    list.innerHTML = '';
    stageOrder.forEach(stage=>{
      const item = document.createElement('div');
      item.className = 'stage-order-item';
      item.dataset.stage = stage;
      item.innerHTML = `<span class="stage-order-handle">⠿</span><span>${escapeHtml(stage)}</span>`;
      list.appendChild(item);
    });
  }

  function wireStageOrderDrag(){
    const list = document.getElementById('stageOrderList');
    let draggingEl = null, startY = 0;

    function onPointerDown(ev){
      const item = ev.target.closest('.stage-order-item');
      if(!item) return;
      draggingEl = item;
      startY = ev.clientY;
      item.classList.add('dragging');
      item.setPointerCapture(ev.pointerId);
    }
    function onPointerMove(ev){
      if(!draggingEl) return;
      draggingEl.style.transform = `translateY(${ev.clientY - startY}px)`;
      const draggingRect = draggingEl.getBoundingClientRect();
      const draggingMid = draggingRect.top + draggingRect.height/2;

      // Only ever compare against whichever item is *currently* the immediate
      // neighbour — comparing against every row in the list (as this used to)
      // means a distant row below is "less than" the drag position on almost
      // every move, triggering a swap with it instead of the actual neighbour,
      // which flips back again next event: a rapid, permanent flicker.
      const prev = draggingEl.previousElementSibling;
      if(prev){
        const prevRect = prev.getBoundingClientRect();
        const prevMid = prevRect.top + prevRect.height/2;
        if(draggingMid < prevMid){
          list.insertBefore(draggingEl, prev);
          startY = ev.clientY;
          draggingEl.style.transform = 'translateY(0px)';
          return;
        }
      }
      const next = draggingEl.nextElementSibling;
      if(next){
        const nextRect = next.getBoundingClientRect();
        const nextMid = nextRect.top + nextRect.height/2;
        if(draggingMid > nextMid){
          list.insertBefore(draggingEl, next.nextSibling);
          startY = ev.clientY;
          draggingEl.style.transform = 'translateY(0px)';
          return;
        }
      }
    }
    function onPointerUp(ev){
      if(!draggingEl) return;
      draggingEl.classList.remove('dragging');
      draggingEl.style.transform = '';
      draggingEl.releasePointerCapture(ev.pointerId);
      draggingEl = null;
      stageOrder = [...list.querySelectorAll('.stage-order-item')].map(el => el.dataset.stage);
      saveStageOrder();
      build();
      buildMyHtonGrid();
      renderNowLine();
    }

    list.addEventListener('pointerdown', onPointerDown);
    list.addEventListener('pointermove', onPointerMove);
    list.addEventListener('pointerup', onPointerUp);
    list.addEventListener('pointercancel', onPointerUp);
  }

  renderStageOrderList();
  wireStageOrderDrag();

  const stageOrderOverlay = document.getElementById('stageOrderOverlay');
  document.getElementById('stageOrderOpenBtn').addEventListener('click', ()=>{
    stageOrderOverlay.classList.add('open');
  });
  document.getElementById('stageOrderDoneBtn').addEventListener('click', ()=>{
    stageOrderOverlay.classList.remove('open');
  });

  // ---------- Search ----------
  const searchInput = document.getElementById('searchInput');
  const searchWrap = document.querySelector('.search-wrap');
  const searchClear = document.getElementById('searchClear');
  function clearSearch(){
    searchInput.value = '';
    searchTerm = '';
    searchWrap.classList.remove('has-text');
    searchInput.blur();
    render();
  }
  searchInput.addEventListener('input', e=>{
    searchTerm = e.target.value.trim().toLowerCase();
    searchWrap.classList.toggle('has-text', e.target.value.length > 0);
    render();
  });
  searchInput.addEventListener('keydown', e=>{
    if(e.key === 'Escape') clearSearch();
  });
  searchClear.addEventListener('click', clearSearch);

  function setDetail(html){
    document.getElementById('detailBar').innerHTML = html;
  }
  function escapeHtml(str){ const div=document.createElement('div'); div.textContent=str; return div.innerHTML; }
  // Delegated so it keeps working across every setDetail() re-render, rather
  // than needing to re-attach a listener each time the detail bar's content changes.
  document.getElementById('detailBar').addEventListener('click', ev=>{
    const link = ev.target.closest('.detail-artist-link');
    if(!link) return;
    goToArtistBio(link.dataset.artist);
  });

  // ---------- Shared grid-building helpers (used by both the main grid and My Hton's timetable) ----------
  const LANE_STRIPE_BG = `repeating-linear-gradient(to right, transparent 0, transparent ${PX_PER_HOUR-1}px, rgba(255,255,255,0.05) ${PX_PER_HOUR-1}px, rgba(255,255,255,0.05) ${PX_PER_HOUR}px)`;

  function buildRulerEl(){
    const ruler = document.createElement('div');
    ruler.className = 'ruler';
    ruler.style.width = timelineWidth + 'px';
    for(let h=gg.startHour; h<=gg.endHour; h++){
      const tick = document.createElement('div');
      const hourMod = ((h % 24)+24)%24;
      tick.className = 'tick';
      tick.style.left = hourToX(h) + 'px';
      tick.textContent = String(hourMod).padStart(2,'0') + ':00';
      ruler.appendChild(tick);
    }
    days.forEach(d=>{
      const band = document.createElement('div');
      band.className = 'dayband';
      band.style.left = hourToX(gg.bands[d].start) + 'px';
      band.innerHTML = `<span>${d}</span>`;
      ruler.appendChild(band);
    });
    return ruler;
  }

  function buildBlockEl(e, stage){
    const beginAbs = globalMin(e.day, e.begin);
    // An overnight set ending exactly at 09:00 doesn't get shifted by
    // globalMin's own "h < 9" rule (only strictly-before-9 times do), so its
    // end can land before its begin (e.g. 06:00–09:00). Treat that as
    // wrapping past the 9am cutoff instead of rendering a negative-width block.
    let endAbs = globalMin(e.day, e.end);
    if (endAbs <= beginAbs) endAbs += 24*60;
    const left = hourToX(beginAbs/60);
    const width = Math.max((endAbs - beginAbs) / 60 * PX_PER_HOUR - 2, 4);

    const key = entryKey(e);
    const favLevel = favorites[key] || 0;
    const stageColor = STAGE_COLORS[stage] || '#888888';

    const block = document.createElement('div');
    block.className = 'block' + (width < 46 ? ' tiny' : '') + (favLevel ? ' fav' : '');
    block.style.left = left + 'px';
    block.style.width = width + 'px';
    const light = isLightTheme();
    const fillAlpha = favLevel
      ? (light ? FAV_ALPHA_LIGHT : FAV_ALPHA_DARK)
      : (light ? BLOCK_ALPHA_LIGHT : BLOCK_ALPHA_DARK);
    const borderAlpha = favLevel
      ? (light ? FAV_BORDER_ALPHA_LIGHT : FAV_BORDER_ALPHA_DARK)
      : (light ? BLOCK_BORDER_ALPHA_LIGHT : BLOCK_BORDER_ALPHA_DARK);
    block.style.backgroundColor = 'var(--bg-card)';
    block.style.backgroundImage = `linear-gradient(${hexToRgba(stageColor, fillAlpha)}, ${hexToRgba(stageColor, fillAlpha)})`;
    block.style.borderColor = hexToRgba(stageColor, borderAlpha);
    if(favLevel && light) block.style.color = FAV_TEXT_LIGHT;
    block.tabIndex = 0;
    block.title = `${e.name} \u00b7 ${stage} \u00b7 ${e.day} ${e.begin}\u2013${e.end}`
      + (favLevel ? ` \u00b7 ${FAV_LABELS[favLevel]}` : '');
    block.dataset.name = e.name.toLowerCase();
    block.dataset.entryKey = key;

    if(width >= 46){
      block.innerHTML = `<span class="block-star" data-key="${key}" title="Favourite">${favLevel ? '\u2605' : '\u2606'}</span>
        <span class="block-name-row"><span class="block-name">${escapeHtml(e.name)}${favLevel ? ' ' + FAV_STARS[favLevel] : ''}</span></span>`;
      const starEl = block.querySelector('.block-star');
      starEl.addEventListener('click', ev=>{
        ev.stopPropagation();
        if(dragged) return;
        const rect = starEl.getBoundingClientRect();
        openStarMenu(key, rect.left, rect.bottom + 4);
      });
    }

    const showDetail = ()=>{
      // Only linkify when the name resolves to exactly one artist that has a
      // profile \u2014 a B2B/split name (e.g. "Amit & Aneesh") stays plain text
      // rather than guessing which half of the pair to send someone to.
      const profiles = resolveArtistProfiles(e.name).filter(p => ARTIST_DATA[p]);
      const nameHtml = profiles.length === 1
        ? `<strong class="detail-artist-link" data-artist="${escapeHtml(profiles[0])}">${escapeHtml(e.name)}</strong>`
        : `<strong>${escapeHtml(e.name)}</strong>`;
      setDetail(`${nameHtml} &nbsp;\u00b7&nbsp; ${stage} &nbsp;\u00b7&nbsp; ${e.day} ${e.begin}\u2013${e.end}`);
    };
    block.addEventListener('mouseenter', showDetail);
    block.addEventListener('focus', showDetail);
    block.addEventListener('click', ()=>{ if(dragged) return; showDetail(); });

    return block;
  }

  // A trailing blank row so the last real stage (e.g. The Armadillo) can be scrolled
  // fully clear of the rounded corners/home-indicator area on phones like the
  // iPhone 13, which otherwise clip the bottom of the final lane.
  function appendSpacerRow(inner){
    const row = document.createElement('div');
    row.className = 'stagerow spacer-row';
    const label = document.createElement('div');
    label.className = 'stagelabel empty';
    const lane = document.createElement('div');
    lane.className = 'lane';
    lane.style.width = timelineWidth + 'px';
    row.appendChild(label);
    row.appendChild(lane);
    inner.appendChild(row);
  }

  // ---------- Grid render (built once; search just toggles classes) ----------
  function build(){
    const inner = document.getElementById('gridInner');
    inner.innerHTML = '';
    inner.style.width = (labelW() + timelineWidth) + 'px';

    const corner = document.createElement('div');
    corner.className = 'corner';
    corner.textContent = 'Stage';
    inner.appendChild(corner);
    inner.appendChild(buildRulerEl());

    stageOrder.forEach(stage=>{
      const row = document.createElement('div');
      row.className = 'stagerow';

      const label = document.createElement('div');
      label.className = 'stagelabel';
      label.textContent = stage;

      const lane = document.createElement('div');
      lane.className = 'lane';
      lane.style.width = timelineWidth + 'px';
      lane.style.backgroundImage = LANE_STRIPE_BG;

      const stageEntries = entries.filter(e=>e.stage===stage);
      if(stageEntries.length===0){
        label.classList.add('empty');
        const note = document.createElement('div');
        note.className = 'empty-note';
        note.textContent = "Lineup not added yet";
        lane.appendChild(note);
      }

      stageEntries.forEach(e=> lane.appendChild(buildBlockEl(e, stage)));

      row.appendChild(label);
      row.appendChild(lane);
      inner.appendChild(row);
    });
    appendSpacerRow(inner);
  }

  // ---------- My Hton timetable (favourited sets only, same layout as the main grid) ----------
  function buildMyHtonGrid(){
    const inner = document.getElementById('scheduleGridInner');
    inner.innerHTML = '';
    inner.style.width = (labelW() + timelineWidth) + 'px';

    const corner = document.createElement('div');
    corner.className = 'corner';
    corner.textContent = 'Stage';
    inner.appendChild(corner);
    inner.appendChild(buildRulerEl());

    const favStages = stageOrder.filter(stage=>
      entries.some(e=>e.stage===stage && favorites[entryKey(e)]));

    if(favStages.length===0){
      const note = document.createElement('div');
      note.className = 'schedule-empty';
      note.style.padding = '20px';
      note.textContent = 'No favourites yet, tap the star on any set to add one.';
      inner.appendChild(note);
      return;
    }

    favStages.forEach(stage=>{
      const row = document.createElement('div');
      row.className = 'stagerow';

      const label = document.createElement('div');
      label.className = 'stagelabel';
      label.textContent = stage;

      const lane = document.createElement('div');
      lane.className = 'lane';
      lane.style.width = timelineWidth + 'px';
      lane.style.backgroundImage = LANE_STRIPE_BG;

      const stageEntries = entries.filter(e=>e.stage===stage && favorites[entryKey(e)]);
      stageEntries.forEach(e=> lane.appendChild(buildBlockEl(e, stage)));

      row.appendChild(label);
      row.appendChild(lane);
      inner.appendChild(row);
    });
    appendSpacerRow(inner);
  }

  let searchMatches = [];
  let searchMatchIndex = 0;

  function scrollToBlock(el){
    const gs = document.getElementById('gridScroll');
    const gsRect = gs.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const targetLeft = parseFloat(el.style.left) + labelW();
    const targetTop = gs.scrollTop + (elRect.top - gsRect.top) - (gsRect.height/2 - elRect.height/2);
    showGridView();
    // 6 minutes of empty timeline visible before the match's start, in the space
    // actually visible past the sticky stage-label column (not hidden behind it).
    const searchPreRollPx = (6/60) * PX_PER_HOUR;
    gs.scrollTo({left: Math.max(targetLeft - searchPreRollPx - labelW(), 0), top: Math.max(targetTop, 0), behavior:'smooth'});
  }

  function goToSearchMatch(newIndex){
    if(searchMatches.length === 0) return;
    searchMatchIndex = ((newIndex % searchMatches.length) + searchMatches.length) % searchMatches.length;
    scrollToBlock(searchMatches[searchMatchIndex]);
    const label = document.getElementById('searchNavLabel');
    if(label) label.textContent = `${searchMatchIndex+1}/${searchMatches.length}`;
  }

  function applySearch(){
    const blocks = document.querySelectorAll('.block');
    let totalMatches = 0;
    const matchesInGrid = [];
    blocks.forEach(b=>{
      b.classList.remove('match','dim');
      if(!searchTerm) return;
      const isMatch = b.dataset.name.includes(searchTerm);
      if(isMatch){
        b.classList.add('match');
        totalMatches++;
        if(b.closest('#gridInner')) matchesInGrid.push(b);
      }
      else { b.classList.add('dim'); }
    });
    matchesInGrid.sort((a,b)=> parseFloat(a.style.left) - parseFloat(b.style.left));
    searchMatches = matchesInGrid;
    searchMatchIndex = 0;

    if(searchTerm){
      if(totalMatches){
        const navHtml = searchMatches.length > 1
          ? ` <span class="search-nav"><button type="button" id="searchPrevBtn" aria-label="Previous match">&lsaquo;</button><span id="searchNavLabel">1/${searchMatches.length}</span><button type="button" id="searchNextBtn" aria-label="Next match">&rsaquo;</button></span>`
          : '';
        setDetail(`${totalMatches} match${totalMatches===1?'':'es'} for "${searchTerm}" across the weekend${navHtml}`);
        if(searchMatches.length > 1){
          document.getElementById('searchPrevBtn').onclick = ()=> goToSearchMatch(searchMatchIndex-1);
          document.getElementById('searchNextBtn').onclick = ()=> goToSearchMatch(searchMatchIndex+1);
        }
      } else {
        setDetail(`No matches for "${searchTerm}"`);
      }
      if(searchMatches.length) scrollToBlock(searchMatches[0]);
    } else if(document.activeElement !== searchInput){
      setDetail('Hover or tap a set for details');
    }
  }

  function render(){ applySearch(); }

  // ---------- My Hton list view (favourited sets only) ----------
  function renderMyHtonList(){
    const container = document.getElementById('scheduleList');
    container.innerHTML = '';
    const favEntries = entries.filter(e=>favorites[entryKey(e)]);
    if(favEntries.length===0){
      container.innerHTML = '<p class="schedule-empty">No favourites yet, tap the star on any set to add one.</p>';
      return;
    }
    const dayOrder = {}; days.forEach((d,i)=>dayOrder[d]=i);
    const sorted = [...favEntries].sort((a,b)=>
      (dayOrder[a.day]-dayOrder[b.day]) || (globalMin(a.day,a.begin) - globalMin(b.day,b.begin)));
    let lastDay = null;
    sorted.forEach(e=>{
      if(e.day !== lastDay){
        lastDay = e.day;
        const heading = document.createElement('div');
        heading.className = 'schedule-day-heading';
        heading.textContent = e.day;
        container.appendChild(heading);
      }
      const level = favorites[entryKey(e)];
      const item = document.createElement('div');
      item.className = 'schedule-item';
      item.style.borderLeftColor = hexToRgba(STAGE_COLORS[e.stage] || '#888888', 0.9);
      item.innerHTML = `<div class="schedule-item-main">
          <span class="schedule-item-name">${escapeHtml(e.name)}</span>
          <span class="schedule-item-stars">${FAV_STARS[level]}</span>
        </div>
        <div class="schedule-item-meta">${e.stage} · ${e.day} ${e.begin}–${e.end}</div>`;
      container.appendChild(item);
    });
  }

  // ---------- Artists tab ----------
  // ARTIST_DATA (from artists.js) only covers a first batch of bigger-billed
  // acts; everyone else in the lineup still shows up in the list, just
  // without a bio/link yet, rather than being left out entirely.
  const ALL_ARTIST_NAMES = [...new Set(
    entries
      .filter(e => !e.name.startsWith('Talk:') && !ARTIST_EXCLUDE.includes(e.name))
      .flatMap(e => ARTIST_SPLITS[e.name] || [ARTIST_ALIASES[e.name] || e.name])
  )].sort((a,b)=>a.localeCompare(b));

  // Same grouping a grid entry's name resolves to in the Artists tab — used to
  // decide whether a block's detail-bar name can link to a profile.
  function resolveArtistProfiles(rawName){
    return ARTIST_SPLITS[rawName] || [ARTIST_ALIASES[rawName] || rawName];
  }

  // Every real set a given Artists-tab profile plays over the weekend, in
  // day/time order — one artist can have several (a regular slot plus a
  // differently-billed one, like Craig Richards' Electro/Reggae sets, or
  // genuinely playing more than once).
  const ARTIST_DAY_ORDER = {};
  days.forEach((d,i)=>{ ARTIST_DAY_ORDER[d] = i; });
  function entriesForArtist(profileName){
    return entries
      .filter(e => !e.name.startsWith('Talk:') && !ARTIST_EXCLUDE.includes(e.name))
      .filter(e => resolveArtistProfiles(e.name).includes(profileName))
      .sort((a,b) => (ARTIST_DAY_ORDER[a.day]-ARTIST_DAY_ORDER[b.day]) || (globalMin(a.day,a.begin)-globalMin(b.day,b.begin)));
  }

  // Tapping one of an artist's set times jumps straight to that exact block
  // in the main grid — entryKey is unique per block, so this still finds the
  // right one even when an artist plays more than once under the same name.
  function goToArtistSet(key){
    const block = document.querySelector(`#gridInner [data-entry-key="${CSS.escape(key)}"]`);
    if(block) scrollToBlock(block);
  }

  // Lets the "back" button in the Artists tab return to exactly where the
  // user was (day/scroll position, or My Hton's list/timetable + scroll)
  // before they followed a block's name to that artist's bio.
  let artistReturnState = null;
  function captureReturnState(){
    if(currentView === 'schedule'){
      const mode = document.querySelector('.schedule-toggle-btn.active')?.dataset.mode || 'list';
      if(mode === 'timetable'){
        const gs = document.getElementById('scheduleGridScroll');
        return {view:'schedule', mode, scrollLeft: gs.scrollLeft, scrollTop: gs.scrollTop};
      }
      const list = document.getElementById('scheduleList');
      return {view:'schedule', mode, scrollTop: list.scrollTop};
    }
    if(currentView === 'about') return {view:'about'};
    const gs = document.getElementById('gridScroll');
    return {view:'grid', scrollLeft: gs.scrollLeft, scrollTop: gs.scrollTop};
  }
  function restoreReturnState(state){
    if(!state) return;
    if(state.view === 'schedule'){
      showScheduleView();
      applyScheduleMode(state.mode);
      if(state.mode === 'timetable'){
        const gs = document.getElementById('scheduleGridScroll');
        gs.scrollLeft = state.scrollLeft; gs.scrollTop = state.scrollTop;
      } else {
        document.getElementById('scheduleList').scrollTop = state.scrollTop;
      }
    } else if(state.view === 'about'){
      showAboutView();
    } else {
      showGridView();
      const gs = document.getElementById('gridScroll');
      gs.scrollLeft = state.scrollLeft; gs.scrollTop = state.scrollTop;
    }
  }
  function goToArtistBio(profileName){
    artistReturnState = captureReturnState();
    document.getElementById('artistsSearchInput').value = '';
    showArtistsView();
    const target = [...document.querySelectorAll('.artist-item')]
      .find(item => item.dataset.artist === profileName);
    if(target){
      const head = target.querySelector('.artist-item-head');
      if(head && !target.classList.contains('open')) head.click();
      target.scrollIntoView({block:'center'});
    }
    document.getElementById('artistBackBtn').style.display = '';
  }
  document.getElementById('artistBackBtn').addEventListener('click', ()=>{
    const state = artistReturnState;
    artistReturnState = null;
    document.getElementById('artistBackBtn').style.display = 'none';
    restoreReturnState(state);
  });

  function buildArtistsList(){
    const container = document.getElementById('artistsList');
    const searchTerm = (document.getElementById('artistsSearchInput').value || '').trim().toLowerCase();
    container.innerHTML = '';
    const filtered = searchTerm
      ? ALL_ARTIST_NAMES.filter(n => n.toLowerCase().includes(searchTerm))
      : ALL_ARTIST_NAMES;
    if(filtered.length === 0){
      container.innerHTML = '<p class="schedule-empty">No artists match your search.</p>';
      return;
    }
    filtered.forEach(name=>{
      const info = ARTIST_DATA[name];
      const item = document.createElement('div');
      item.className = 'artist-item';
      item.dataset.artist = name;
      const head = document.createElement('button');
      head.type = 'button';
      head.className = 'artist-item-head';
      head.innerHTML = `<span class="artist-item-name">${escapeHtml(name)}</span>` +
        '<span class="artist-item-chevron">&rsaquo;</span>';
      item.appendChild(head);

      // Every artist gets an expandable body now — where/when they're
      // playing is useful even before a bio has been researched.
      const body = document.createElement('div');
      body.className = 'artist-item-body';
      body.style.display = 'none';
      const sets = entriesForArtist(name);
      const setsHtml = sets.length
        ? `<div class="artist-item-sets">${sets.map(e => `
            <button type="button" class="artist-item-set" data-entry-key="${escapeHtml(entryKey(e))}">
              <span class="artist-item-set-day">${escapeHtml(e.day)}</span>
              <span class="artist-item-set-stage">${escapeHtml(e.stage)}</span>
              <span class="artist-item-set-time">${escapeHtml(e.begin)}–${escapeHtml(e.end)}</span>
            </button>`).join('')}</div>`
        : '';
      // Embeds are loaded lazily (only once a card is actually opened) rather
      // than all at once when the list is built — with 100+ artists having a
      // SoundCloud embed, eagerly mounting every iframe up front was loading
      // that many cross-origin players simultaneously, which was heavy enough
      // to crash/reload the app when installed as an iOS home-screen PWA.
      body.innerHTML =
        (info?.description ? `<p class="artist-item-desc">${escapeHtml(info.description)}</p>`
                            : '<p class="artist-item-desc artist-item-pending-note">Profile coming soon</p>') +
        setsHtml +
        (info?.soundcloudEmbed ? '<div class="artist-embed-slot"></div>' : '') +
        (info?.soundcloudUrl ? `<a class="artist-item-link" href="${info.soundcloudUrl}" target="_blank" rel="noopener">Listen on SoundCloud</a>` : '');
      item.appendChild(body);

      body.querySelectorAll('.artist-item-set').forEach(btn=>{
        btn.addEventListener('click', ()=> goToArtistSet(btn.dataset.entryKey));
      });

      const embedSlot = body.querySelector('.artist-embed-slot');
      let embedLoaded = false;
      head.addEventListener('click', ()=>{
        const isOpen = body.style.display !== 'none';
        if(!isOpen && embedSlot && !embedLoaded){
          embedLoaded = true;
          // The embed is a cross-origin SoundCloud iframe — offline, it just
          // fails silently/blank rather than showing anything useful, so check
          // connectivity upfront instead of letting the iframe attempt to load.
          embedSlot.innerHTML = navigator.onLine
            ? info.soundcloudEmbed
            : '<p class="artist-embed-offline">This feature requires internet connection.</p>';
        }
        body.style.display = isOpen ? 'none' : '';
        item.classList.toggle('open', !isOpen);
      });
      container.appendChild(item);
    });
  }
  document.getElementById('artistsSearchInput').addEventListener('input', buildArtistsList);
  // Re-render so embeds switch between the real iframe and the offline
  // message as soon as connectivity actually changes, not just on next visit.
  window.addEventListener('online', buildArtistsList);
  window.addEventListener('offline', buildArtistsList);

  // ---------- Live "now" line (drawn in both the main grid and My Hton's timetable) ----------
  function updateNowLineFor(innerId, lineId){
    const inner = document.getElementById(innerId);
    const min = nowGlobalMin();
    let line = document.getElementById(lineId);
    // nowGlobalMin only tells us "now" falls on a festival day, not that it
    // falls inside the drawn timeline. Thursday daytime (09:00 until the
    // 17:00 first set) sits before it, and Monday 03:00-09:00 after the last
    // set sits past the end — both used to place the line outside the grid,
    // where it either hid behind the stage labels or added phantom scroll
    // space past Sunday. No line at all is the honest answer at those times.
    if(min === null || min/60 < gg.startHour || min/60 > gg.endHour){
      if(line) line.remove();
      return;
    }
    if(!line){
      line = document.createElement('div');
      line.className = 'now-line';
      line.id = lineId;
      inner.appendChild(line);
    }
    line.style.left = (labelW() + hourToX(min/60)) + 'px';
    line.style.height = inner.scrollHeight + 'px';
  }
  function renderNowLine(){
    updateNowLineFor('gridInner', 'nowLine');
    updateNowLineFor('scheduleGridInner', 'scheduleNowLine');
  }

  // ---------- Drag to scroll, works from anywhere including on top of blocks ----------
  const gridScroll = document.getElementById('gridScroll');
  const scheduleGridScroll = document.getElementById('scheduleGridScroll');
  let isDown = false, dragged = false, startX, startY, scrollLeft, scrollTop, activeScrollEl = null;
  function wireDragScroll(el){
    el.addEventListener('mousedown', e=>{
      isDown = true; dragged = false; activeScrollEl = el;
      startX = e.pageX; startY = e.pageY;
      scrollLeft = el.scrollLeft; scrollTop = el.scrollTop;
      el.classList.add('dragging');
    });
  }
  window.addEventListener('mouseup', ()=>{ isDown=false; if(activeScrollEl) activeScrollEl.classList.remove('dragging'); });
  window.addEventListener('mousemove', e=>{
    if(!isDown || !activeScrollEl) return;
    const dx = e.pageX - startX, dy = e.pageY - startY;
    if(Math.abs(dx) > 3 || Math.abs(dy) > 3) dragged = true;
    if(dragged){
      e.preventDefault();
      activeScrollEl.scrollLeft = scrollLeft - dx;
      activeScrollEl.scrollTop = scrollTop - dy;
    }
  });
  wireDragScroll(gridScroll);
  wireDragScroll(scheduleGridScroll);

  // ---------- Favourite star menu (popover) ----------
  const starMenu = document.getElementById('starMenu');
  let activeFavKey = null;
  function openStarMenu(key, x, y){
    activeFavKey = key;
    starMenu.style.display = 'flex';
    const rect = starMenu.getBoundingClientRect();
    let left = x, top = y;
    if(left + rect.width > window.innerWidth) left = window.innerWidth - rect.width - 8;
    if(top + rect.height > window.innerHeight) top = window.innerHeight - rect.height - 8;
    starMenu.style.left = Math.max(8, left) + 'px';
    starMenu.style.top = Math.max(8, top) + 'px';
  }
  function closeStarMenu(){ starMenu.style.display = 'none'; activeFavKey = null; }
  starMenu.querySelectorAll('button').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      if(!activeFavKey) return;
      const level = Number(btn.dataset.level);
      if(level === 0) delete favorites[activeFavKey];
      else favorites[activeFavKey] = level;
      saveFavorites();
      closeStarMenu();
      build();
      buildMyHtonGrid();
      renderMyHtonList();
      renderNowLine();
      render();
    });
  });
  document.addEventListener('click', e=>{
    if(starMenu.style.display === 'flex' && !starMenu.contains(e.target) && !e.target.classList.contains('block-star')){
      closeStarMenu();
    }
  });
  gridScroll.addEventListener('scroll', closeStarMenu);
  scheduleGridScroll.addEventListener('scroll', closeStarMenu);
  // Keep the highlighted day tab in sync while free-scrolling the grid, not
  // just right after tapping a tab — e.g. scrolling from Friday into
  // Saturday's 09:00 should hand the highlight to Saturday.
  gridScroll.addEventListener('scroll', ()=>{
    if(currentView === 'grid') setActiveDayTab(currentGridDay());
  });
  // Same live scroll-spy for My Hton's own per-day timeline (Timetable sub-mode).
  scheduleGridScroll.addEventListener('scroll', ()=>{
    if(currentView === 'schedule') setActiveDayTab(currentScheduleGridDay());
  });

  loadFavorites();
  build();
  buildMyHtonGrid();
  renderMyHtonList();
  renderNowLine();
  render();
  gridScroll.scrollLeft = 0;
  showAboutView();

  setInterval(renderNowLine, 30000);
  window.addEventListener('resize', renderNowLine);
  // The 30s interval alone is not enough on a phone: iOS and Android throttle
  // or freeze timers entirely while the screen is locked or the app is
  // backgrounded. Pulling your phone out of your pocket mid-festival is the
  // main way this app gets used, so redraw the line the moment we are visible
  // again rather than leaving a stale one until the next tick. pageshow also
  // covers iOS restoring a frozen standalone PWA from its page cache.
  document.addEventListener('visibilitychange', ()=>{
    if(!document.hidden) renderNowLine();
  });
  window.addEventListener('pageshow', renderNowLine);

  // ---------- Offline support ----------
  if('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
      navigator.serviceWorker.register('sw.js').catch(err=>{
        console.warn('Service worker registration failed, app still works online:', err);
      });
    });
  }
})();
