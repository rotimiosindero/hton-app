(function(){
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
  let notes = [];
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

  const totalHours = gg.endHour - gg.startHour;
  const timelineWidth = totalHours * PX_PER_HOUR;

  function hourToX(h){ return (h - gg.startHour) * PX_PER_HOUR; }

  // ---------- Day quick-jump buttons ----------
  const dayTabs = document.getElementById('dayTabs');
  days.forEach(d=>{
    const btn = document.createElement('button');
    btn.className = 'tab';
    btn.textContent = d;
    btn.onclick = ()=>{
      const gs = document.getElementById('gridScroll');
      const targetX = hourToX(gg.bands[d].start) + LABEL_W;
      gs.scrollTo({left: Math.max(targetX - 40, 0), behavior:'smooth'});
    };
    dayTabs.appendChild(btn);
  });

  // ---------- Search ----------
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', e=>{
    searchTerm = e.target.value.trim().toLowerCase();
    render();
  });

  function setDetail(html){
    document.getElementById('detailBar').innerHTML = html;
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

    const ruler = document.createElement('div');
    ruler.className = 'ruler';
    ruler.style.width = timelineWidth + 'px';
    for(let h=gg.startHour; h<=gg.endHour; h++){
      const tick = document.createElement('div');
      const hourMod = ((h % 24)+24)%24;
      const isDaybreak = hourMod===0;
      tick.className = 'tick' + (isDaybreak ? ' daybreak' : '');
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
    inner.appendChild(ruler);

    stages.forEach(stage=>{
      const row = document.createElement('div');
      row.className = 'stagerow';

      const label = document.createElement('div');
      label.className = 'stagelabel';
      label.textContent = stage;

      const lane = document.createElement('div');
      lane.className = 'lane';
      lane.style.width = timelineWidth + 'px';
      lane.style.backgroundImage = `repeating-linear-gradient(to right, transparent 0, transparent ${PX_PER_HOUR-1}px, rgba(255,255,255,0.05) ${PX_PER_HOUR-1}px, rgba(255,255,255,0.05) ${PX_PER_HOUR}px)`;

      const stageEntries = entries.filter(e=>e.stage===stage);
      if(stageEntries.length===0){
        label.classList.add('empty');
        const note = document.createElement('div');
        note.className = 'empty-note';
        note.textContent = "Lineup not added yet";
        lane.appendChild(note);
      }

      stageEntries.forEach(e=>{
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
            <span class="block-name">${escapeHtml(e.name)}${favLevel ? ' ' + FAV_STARS[favLevel] : ''}</span>`;
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

        lane.appendChild(block);
      });

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

  // ---------- Drag to scroll, works from anywhere including on top of blocks ----------
  const gridScroll = document.getElementById('gridScroll');
  let isDown = false, dragged = false, startX, startY, scrollLeft, scrollTop;
  gridScroll.addEventListener('mousedown', e=>{
    isDown = true; dragged = false;
    startX = e.pageX; startY = e.pageY;
    scrollLeft = gridScroll.scrollLeft; scrollTop = gridScroll.scrollTop;
    gridScroll.classList.add('dragging');
  });
  window.addEventListener('mouseup', ()=>{ isDown=false; gridScroll.classList.remove('dragging'); });
  window.addEventListener('mousemove', e=>{
    if(!isDown) return;
    const dx = e.pageX - startX, dy = e.pageY - startY;
    if(Math.abs(dx) > 3 || Math.abs(dy) > 3) dragged = true;
    if(dragged){
      e.preventDefault();
      gridScroll.scrollLeft = scrollLeft - dx;
      gridScroll.scrollTop = scrollTop - dy;
    }
  });

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
      render();
    });
  });
  document.addEventListener('click', e=>{
    if(starMenu.style.display === 'flex' && !starMenu.contains(e.target) && !e.target.classList.contains('block-star')){
      closeStarMenu();
    }
  });
  gridScroll.addEventListener('scroll', closeStarMenu);

  // ---------- Notes (persistent via localStorage) ----------
  const NOTES_KEY = 'houghton-notes-v1';
  const overlay = document.getElementById('overlay');
  const panel = document.getElementById('notesPanel');
  document.getElementById('notesToggle').onclick = ()=>{ overlay.classList.add('open'); panel.classList.add('open'); };
  document.getElementById('closePanel').onclick = closePanelFn;
  overlay.onclick = closePanelFn;
  function closePanelFn(){ overlay.classList.remove('open'); panel.classList.remove('open'); }

  const noteDaySelect = document.getElementById('noteDay');
  days.forEach(d=>{
    const opt = document.createElement('option'); opt.value=d; opt.textContent=d;
    noteDaySelect.appendChild(opt);
  });

  function loadNotes(){
    try{
      const raw = localStorage.getItem(NOTES_KEY);
      notes = raw ? JSON.parse(raw) : (HTON_DATA.notes || []);
    }catch(err){
      // localStorage can throw in private-browsing edge cases; fall back gracefully
      notes = HTON_DATA.notes || [];
    }
    renderNotes();
  }
  function saveNotes(){
    try{ localStorage.setItem(NOTES_KEY, JSON.stringify(notes)); }
    catch(err){ console.error('Could not save notes', err); }
    renderNotes();
  }
  function escapeHtml(str){ const div=document.createElement('div'); div.textContent=str; return div.innerHTML; }
  function renderNotes(){
    const list = document.getElementById('notesList');
    document.getElementById('noteCount').textContent = notes.length;
    list.innerHTML = '';
    if(notes.length===0){ list.innerHTML = '<p class="empty-notes">No notes yet, add one below.</p>'; return; }
    const dayOrder = {}; days.forEach((d,i)=>dayOrder[d]=i);
    const sorted = [...notes].sort((a,b)=>(dayOrder[a.day]-dayOrder[b.day]) || (a.time||'').localeCompare(b.time||''));
    sorted.forEach(n=>{
      const item = document.createElement('div');
      item.className = 'note-item';
      item.innerHTML = `
        <div class="note-meta">
          <span class="note-tag">${n.day}${n.time? ' \u00b7 '+n.time : ''}</span>
          <span class="note-actions"><button data-id="${n.id}">delete</button></span>
        </div>
        <div class="note-text">${escapeHtml(n.text)}</div>`;
      list.appendChild(item);
    });
    list.querySelectorAll('button').forEach(btn=>{
      btn.onclick = ()=>{ notes = notes.filter(n=>n.id!==btn.dataset.id); saveNotes(); };
    });
  }
  document.getElementById('addNoteBtn').onclick = ()=>{
    const text = document.getElementById('noteText').value.trim();
    if(!text) return;
    notes.push({
      id: 'n'+Date.now()+Math.random().toString(16).slice(2),
      day: noteDaySelect.value,
      time: document.getElementById('noteTime').value.trim(),
      text
    });
    document.getElementById('noteText').value = '';
    document.getElementById('noteTime').value = '';
    saveNotes();
  };

  loadFavorites();
  build();
  loadNotes();
  render();
  gridScroll.scrollLeft = 0;

  // ---------- Offline support ----------
  if('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
      navigator.serviceWorker.register('sw.js').catch(err=>{
        console.warn('Service worker registration failed, app still works online:', err);
      });
    });
  }
})();
