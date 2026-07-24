(function(){
  // ---------- Password gate (soft deterrent only — this is a static site, so
  // data.js and the rendered page are always publicly fetchable regardless.
  // This just keeps casual visitors from landing on the content directly.) ----------
  const PASSGATE_HASH = '415e876821dbe332e31322627ed2588145c74f349133bd715f29486be0a1a1d6';
  const PASSGATE_KEY = 'houghton-unlocked-v1';
  async function sha256Hex(text){
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
    return [...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,'0')).join('');
  }
  const passGate = document.getElementById('passGate');
  const passGateForm = document.getElementById('passGateForm');
  const passGateInput = document.getElementById('passGateInput');
  const passGateError = document.getElementById('passGateError');
  let alreadyUnlocked = false;
  try{ alreadyUnlocked = localStorage.getItem(PASSGATE_KEY) === '1'; }catch(err){}
  if(alreadyUnlocked) passGate.classList.add('unlocked');
  passGateForm.addEventListener('submit', async ev=>{
    ev.preventDefault();
    const hash = await sha256Hex(passGateInput.value);
    if(hash === PASSGATE_HASH){
      passGateError.style.display = 'none';
      passGate.classList.add('unlocked');
      try{ localStorage.setItem(PASSGATE_KEY, '1'); }catch(err){}
    } else {
      passGateError.style.display = 'block';
      passGateInput.value = '';
      passGateInput.focus();
    }
  });

  const days = HTON_DATA.days;
  const stages = HTON_DATA.stages;
  const entries = HTON_DATA.entries;
  const gg = HTON_DATA.globalGrid; // {startHour, endHour, dayIndex, bands}
  const PX_PER_HOUR = 140;
  const LABEL_W = 132;

  const STAGE_COLORS = {
    'Derren Smart':'#C1441E','Pinters':'#8B5E34','Warehouse':'#9C7A3C','The Quarry':'#6E7B5C',
    'Pavilion':'#4F6B66','Earthling':'#D4A24E','Outburst':'#A8583F','Terminus':'#6B5B4A',
    'Stallions':'#5C6E7A','Gramophone':'#B3702E','Giant Steps':'#7A8B5E','Lake/Orchard':'#5F7A6E',
    'Armadilo':'#9E6B3F'
  };
  const BLOCK_ALPHA = 0.25;
  const FAV_ALPHA = 0.6;
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

  // ---------- Now / Day / My Schedule tabs ----------
  const dayTabs = document.getElementById('dayTabs');
  const scheduleView = document.getElementById('scheduleView');

  function showGridView(){
    document.getElementById('gridScroll').style.display = '';
    scheduleView.style.display = 'none';
    myScheduleBtn.classList.remove('active');
  }
  function showScheduleView(){
    document.getElementById('gridScroll').style.display = 'none';
    scheduleView.style.display = 'flex';
    myScheduleBtn.classList.add('active');
  }

  function goToNow(){
    showGridView();
    const gs = document.getElementById('gridScroll');
    const nowMin = nowGlobalMin();
    if(nowMin === null){
      setDetail('Outside the festival dates — showing the start of Thursday');
      gs.scrollTo({left: 0, behavior:'smooth'});
      return;
    }
    const targetX = hourToX(nowMin/60) + LABEL_W;
    gs.scrollTo({left: Math.max(targetX - 120, 0), behavior:'smooth'});
  }

  document.getElementById('pageTitle').addEventListener('click', goToNow);

  days.forEach(d=>{
    const btn = document.createElement('button');
    btn.className = 'tab';
    btn.textContent = d;
    btn.onclick = ()=>{
      showGridView();
      const gs = document.getElementById('gridScroll');
      const targetX = hourToX(gg.bands[d].start) + LABEL_W;
      gs.scrollTo({left: Math.max(targetX - 40, 0), behavior:'smooth'});
    };
    dayTabs.appendChild(btn);
  });

  const myScheduleBtn = document.createElement('button');
  myScheduleBtn.className = 'tab';
  myScheduleBtn.textContent = 'My Hton';
  myScheduleBtn.onclick = showScheduleView;
  dayTabs.appendChild(myScheduleBtn);

  const SCHEDULE_MODE_KEY = 'houghton-schedule-mode-v1';
  function applyScheduleMode(mode){
    document.querySelectorAll('.schedule-toggle-btn').forEach(b=>
      b.classList.toggle('active', b.dataset.mode === mode));
    document.getElementById('scheduleList').style.display = mode === 'timetable' ? 'none' : '';
    document.getElementById('scheduleGridScroll').style.display = mode === 'timetable' ? '' : 'none';
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

  // ---------- Search ----------
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', e=>{
    searchTerm = e.target.value.trim().toLowerCase();
    render();
  });

  function setDetail(html){
    document.getElementById('detailBar').innerHTML = html;
  }
  function escapeHtml(str){ const div=document.createElement('div'); div.textContent=str; return div.innerHTML; }

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
    const endAbs = globalMin(e.day, e.end);
    const left = hourToX(beginAbs/60);
    const width = Math.max((endAbs - beginAbs) / 60 * PX_PER_HOUR - 2, 4);

    const key = entryKey(e);
    const favLevel = favorites[key] || 0;
    const stageColor = STAGE_COLORS[stage] || '#888888';

    const block = document.createElement('div');
    block.className = 'block' + (width < 46 ? ' tiny' : '') + (favLevel ? ' fav' : '');
    block.style.left = left + 'px';
    block.style.width = width + 'px';
    block.style.backgroundColor = 'var(--bg-card)';
    block.style.backgroundImage = `linear-gradient(${hexToRgba(stageColor, favLevel ? FAV_ALPHA : BLOCK_ALPHA)}, ${hexToRgba(stageColor, favLevel ? FAV_ALPHA : BLOCK_ALPHA)})`;
    block.style.borderColor = hexToRgba(stageColor, 0.5);
    block.tabIndex = 0;
    block.title = `${e.name} \u00b7 ${stage} \u00b7 ${e.day} ${e.begin}\u2013${e.end}`
      + (favLevel ? ` \u00b7 ${FAV_LABELS[favLevel]}` : '');
    block.dataset.name = e.name.toLowerCase();

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

    const showDetail = ()=> setDetail(`<strong>${e.name}</strong> &nbsp;\u00b7&nbsp; ${stage} &nbsp;\u00b7&nbsp; ${e.day} ${e.begin}\u2013${e.end}`);
    block.addEventListener('mouseenter', showDetail);
    block.addEventListener('focus', showDetail);
    block.addEventListener('click', ()=>{ if(dragged) return; showDetail(); });

    return block;
  }

  // ---------- Grid render (built once; search just toggles classes) ----------
  function build(){
    const inner = document.getElementById('gridInner');
    inner.innerHTML = '';
    inner.style.width = (LABEL_W + timelineWidth) + 'px';

    const corner = document.createElement('div');
    corner.className = 'corner';
    corner.textContent = 'Stage';
    inner.appendChild(corner);
    inner.appendChild(buildRulerEl());

    stages.forEach(stage=>{
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
  }

  // ---------- My Hton timetable (favourited sets only, same layout as the main grid) ----------
  function buildMyHtonGrid(){
    const inner = document.getElementById('scheduleGridInner');
    inner.innerHTML = '';
    inner.style.width = (LABEL_W + timelineWidth) + 'px';

    const corner = document.createElement('div');
    corner.className = 'corner';
    corner.textContent = 'Stage';
    inner.appendChild(corner);
    inner.appendChild(buildRulerEl());

    const favStages = stages.filter(stage=>
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
  }

  function applySearch(){
    const blocks = document.querySelectorAll('.block');
    let totalMatches = 0, firstMatchEl = null;
    blocks.forEach(b=>{
      b.classList.remove('match','dim');
      if(!searchTerm) return;
      const isMatch = b.dataset.name.includes(searchTerm);
      if(isMatch){ b.classList.add('match'); totalMatches++; if(!firstMatchEl) firstMatchEl = b; }
      else { b.classList.add('dim'); }
    });
    if(searchTerm){
      setDetail(totalMatches
        ? `${totalMatches} match${totalMatches===1?'':'es'} for "${searchTerm}" across the weekend`
        : `No matches for "${searchTerm}"`);
      if(firstMatchEl) firstMatchEl.scrollIntoView({behavior:'smooth', inline:'center', block:'center'});
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

  // ---------- Live "now" line (drawn in both the main grid and My Hton's timetable) ----------
  function updateNowLineFor(innerId, lineId){
    const inner = document.getElementById(innerId);
    const min = nowGlobalMin();
    let line = document.getElementById(lineId);
    if(min === null){
      if(line) line.remove();
      return;
    }
    if(!line){
      line = document.createElement('div');
      line.className = 'now-line';
      line.id = lineId;
      inner.appendChild(line);
    }
    line.style.left = (LABEL_W + hourToX(min/60)) + 'px';
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

  loadFavorites();
  build();
  buildMyHtonGrid();
  renderMyHtonList();
  renderNowLine();
  render();
  gridScroll.scrollLeft = 0;

  setInterval(renderNowLine, 30000);
  window.addEventListener('resize', renderNowLine);

  // ---------- Offline support ----------
  if('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
      navigator.serviceWorker.register('sw.js').catch(err=>{
        console.warn('Service worker registration failed, app still works online:', err);
      });
    });
  }
})();
