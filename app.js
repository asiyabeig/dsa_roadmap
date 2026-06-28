// =============================================
// APP STATE
// =============================================

let state = {
  solved: {},       // { problemId: true/false }
  checkedTopics: {}, // { "phaseId-topicIndex": true }
  currentDay: 1,
  streak: 0,
  lastVisit: null,
  xp: 0,
};

function loadState() {
  try {
    const saved = localStorage.getItem("dsa_state_v2");
    if (saved) state = { ...state, ...JSON.parse(saved) };
  } catch(e) {}
}

function saveState() {
  localStorage.setItem("dsa_state_v2", JSON.stringify(state));
}

// =============================================
// XP & LEVELS
// =============================================

function getXP() {
  return Object.entries(state.solved)
    .filter(([,v]) => v)
    .reduce((acc, [id]) => {
      const prob = findProblem(id);
      return acc + (prob ? (XP_MAP[prob.diff] || 0) : 0);
    }, 0);
}

function getLevel(xp) {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].minXP) return LEVELS[i];
  }
  return LEVELS[0];
}

function findProblem(id) {
  for (const phase of PHASES) {
    const p = phase.problems.find(pr => pr.id === id);
    if (p) return p;
  }
  return null;
}

function getSolvedCount() {
  return Object.values(state.solved).filter(Boolean).length;
}

// =============================================
// STREAK
// =============================================
function updateStreak() {
  const today = new Date().toDateString();
  if (state.lastVisit === today) return;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (state.lastVisit === yesterday) {
    state.streak = (state.streak || 0) + 1;
  } else if (state.lastVisit !== today) {
    state.streak = 1;
  }
  state.lastVisit = today;
  saveState();
}

// =============================================
// VIEWS
// =============================================
function showView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + name).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach((b, i) => {
    b.classList.toggle('active', ['dashboard','roadmap','problems','stats'][i] === name);
  });
  if (name === 'dashboard') renderDashboard();
  if (name === 'roadmap') renderRoadmap();
  if (name === 'problems') renderProblems('all');
  if (name === 'stats') renderStats();
}

// =============================================
// DASHBOARD
// =============================================
function renderDashboard() {
  const xp = getXP();
  const lv = getLevel(xp);
  const solved = getSolvedCount();

  document.getElementById('headerXP').textContent = xp;
  document.getElementById('statXP').textContent = xp;
  document.getElementById('statSolved').textContent = solved;
  document.getElementById('statStreak').textContent = state.streak || 0;
  document.getElementById('levelNum').textContent = lv.level;
  document.getElementById('levelTitle').textContent = lv.title;

  // Ring progress
  const next = LEVELS[Math.min(lv.level, LEVELS.length - 1)];
  const pct = lv.level < 5
    ? (xp - lv.minXP) / (lv.maxXP - lv.minXP)
    : 1;
  const circ = 2 * Math.PI * 50;
  const ring = document.getElementById('ringProgress');
  ring.style.strokeDasharray = `${circ * pct} ${circ * (1 - pct)}`;

  // Daily card
  const dayPlan = DAILY_PLAN.find(d => d.day === state.currentDay) || DAILY_PLAN[0];
  const dayProblems = dayPlan.problems.map(id => findProblem(id)).filter(Boolean);
  const allDone = dayProblems.length > 0 && dayProblems.every(p => state.solved[p.id]);

  document.getElementById('todayDay').textContent = `Day ${state.currentDay}`;
  document.getElementById('dailyCard').innerHTML = `
    <div class="daily-topic">${dayPlan.topic}</div>
    <p class="daily-study">${dayPlan.study}</p>
    ${dayProblems.length > 0 ? `
    <div class="daily-problems">
      <div class="dp-label">Today's Problems</div>
      ${dayProblems.map(p => `
        <div class="dp-row ${state.solved[p.id] ? 'done' : ''}" onclick="toggleProblem('${p.id}', this)">
          <span class="dp-check">${state.solved[p.id] ? '✓' : ''}</span>
          <a href="https://leetcode.com/problems/" target="_blank" class="dp-name" onclick="event.stopPropagation()">${p.name}</a>
          <span class="dp-diff ${p.diff}">${p.diff}</span>
          <span class="dp-xp">+${XP_MAP[p.diff]}xp</span>
        </div>
      `).join('')}
    </div>` : '<p class="daily-no-problems">Concept day — no problems today. Focus on learning and notes.</p>'}
    <div class="daily-actions">
      ${state.currentDay > 1 ? `<button class="btn-ghost-sm" onclick="changeDay(-1)">Previous Day</button>` : ''}
      ${allDone && state.currentDay < 100 ? `<button class="btn-primary-sm" onclick="changeDay(1)">Next Day</button>` : ''}
      ${!allDone && dayProblems.length === 0 && state.currentDay < 100 ? `<button class="btn-primary-sm" onclick="changeDay(1)">Mark Day Done</button>` : ''}
    </div>
  `;

  // Phase progress
  const grid = document.getElementById('phasesGrid');
  grid.innerHTML = PHASES.map(ph => {
    const total = ph.problems.length;
    const done = ph.problems.filter(p => state.solved[p.id]).length;
    const pct = total > 0 ? Math.round(done / total * 100) : 0;
    return `
    <div class="phase-pill" onclick="showView('roadmap')" style="--ph-color:${ph.color}">
      <div class="pp-name">${ph.name.split('—')[1]?.trim() || ph.name}</div>
      <div class="pp-bar"><div class="pp-fill" style="width:${pct}%"></div></div>
      <div class="pp-count">${done}/${total}</div>
    </div>`;
  }).join('');
}

function changeDay(delta) {
  state.currentDay = Math.max(1, Math.min(100, state.currentDay + delta));
  saveState();
  renderDashboard();
}

// =============================================
// ROADMAP
// =============================================
function renderRoadmap() {
  const list = document.getElementById('phasesList');
  list.innerHTML = PHASES.map(ph => {
    const total = ph.problems.length;
    const done = ph.problems.filter(p => state.solved[p.id]).length;
    const pct = total > 0 ? Math.round(done / total * 100) : 0;

    return `
    <div class="phase-block" style="--ph-color:${ph.color}" id="phase-${ph.id}">
      <div class="phase-header" onclick="togglePhase('${ph.id}')">
        <div class="ph-left">
          <div class="ph-dot"></div>
          <div>
            <div class="ph-name">${ph.name}</div>
            <div class="ph-days">${ph.days}</div>
          </div>
        </div>
        <div class="ph-right">
          <div class="ph-progress-text">${done}/${total} solved</div>
          <div class="ph-bar-wrap"><div class="ph-bar-fill" style="width:${pct}%"></div></div>
          <div class="ph-chevron" id="chevron-${ph.id}">▾</div>
        </div>
      </div>
      <div class="phase-body" id="body-${ph.id}" style="display:none">
        <div class="topics-section">
          <div class="section-mini-label">Topics to Learn</div>
          <div class="topics-list">
            ${ph.topics.map((t, i) => {
              const key = `${ph.id}-${i}`;
              const checked = state.checkedTopics[key];
              return `<div class="topic-item ${checked ? 'checked' : ''}" onclick="toggleTopic('${key}', this)">
                <span class="topic-check">${checked ? '✓' : ''}</span>
                <span>${t}</span>
              </div>`;
            }).join('')}
          </div>
        </div>
        ${ph.problems.length > 0 ? `
        <div class="problems-section">
          <div class="section-mini-label">LeetCode Problems</div>
          ${ph.problems.map(p => `
            <div class="problem-row ${state.solved[p.id] ? 'done' : ''}" onclick="toggleProblem('${p.id}', this)">
              <span class="prob-check">${state.solved[p.id] ? '✓' : ''}</span>
              <span class="prob-name">${p.name}</span>
              <span class="prob-lc">#${p.lc}</span>
              <span class="diff-tag ${p.diff}">${p.diff}</span>
              <a href="https://leetcode.com/problems/" target="_blank" class="prob-link" onclick="event.stopPropagation()">Solve</a>
            </div>
          `).join('')}
        </div>` : ''}
      </div>
    </div>`;
  }).join('');
}

function togglePhase(id) {
  const body = document.getElementById('body-' + id);
  const chevron = document.getElementById('chevron-' + id);
  const open = body.style.display !== 'none';
  body.style.display = open ? 'none' : 'block';
  chevron.textContent = open ? '▾' : '▴';
  body.style.animation = open ? '' : 'slideDown 0.25s ease';
}

// =============================================
// PROBLEMS
// =============================================
let currentFilter = 'all';

function renderProblems(filter) {
  currentFilter = filter;
  const grid = document.getElementById('problemsGrid');
  const allProblems = PHASES.flatMap(ph =>
    ph.problems.map(p => ({ ...p, phaseName: ph.name.split('—')[1]?.trim() || ph.name }))
  );

  const filtered = allProblems.filter(p => {
    if (filter === 'solved') return state.solved[p.id];
    if (filter === 'easy') return p.diff === 'easy';
    if (filter === 'medium') return p.diff === 'medium';
    if (filter === 'hard') return p.diff === 'hard';
    return true;
  });

  grid.innerHTML = filtered.map(p => `
    <div class="prob-card ${state.solved[p.id] ? 'done' : ''}" onclick="toggleProblem('${p.id}', this)">
      <div class="pc-top">
        <span class="diff-tag ${p.diff}">${p.diff}</span>
        <span class="pc-check ${state.solved[p.id] ? 'visible' : ''}">✓</span>
      </div>
      <div class="pc-name">${p.name}</div>
      <div class="pc-phase">${p.phaseName}</div>
      <div class="pc-footer">
        <span class="pc-lc">LC #${p.lc}</span>
        <a href="https://leetcode.com/problems/" target="_blank" class="pc-link" onclick="event.stopPropagation()">Open</a>
      </div>
    </div>
  `).join('');
}

function filterProblems(filter, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProblems(filter);
}

// =============================================
// STATS
// =============================================
function renderStats() {
  const xp = getXP();
  const lv = getLevel(xp);
  document.getElementById('s-xp').textContent = xp;
  document.getElementById('s-solved').textContent = getSolvedCount();
  document.getElementById('s-streak').textContent = state.streak || 0;
  document.getElementById('s-level').textContent = lv.level;

  const nextLv = LEVELS[Math.min(lv.level, LEVELS.length - 1)];
  const pct = lv.level < 5 ? ((xp - lv.minXP) / (lv.maxXP - lv.minXP) * 100).toFixed(1) : 100;
  document.getElementById('bigBar').style.width = pct + '%';
  document.getElementById('xpCurrent').textContent = xp + ' XP';
  document.getElementById('xpNext').textContent = (lv.level < 5 ? lv.maxXP : '∞') + ' XP';

  document.querySelectorAll('[id^="lrow-"]').forEach((row, i) => {
    const ldata = LEVELS[i];
    row.classList.toggle('current-level', ldata.level === lv.level);
    row.classList.toggle('achieved', xp >= ldata.minXP);
  });
}

function confirmReset() {
  if (confirm("Reset all progress? This cannot be undone.")) {
    localStorage.removeItem("dsa_state_v2");
    state = { solved: {}, checkedTopics: {}, currentDay: 1, streak: 0, lastVisit: null, xp: 0 };
    showToast("Progress reset.");
    renderDashboard();
    renderStats();
  }
}

// =============================================
// TOGGLE PROBLEM
// =============================================
function toggleProblem(id, el) {
  const wasSOlved = state.solved[id];
  state.solved[id] = !wasSOlved;
  saveState();

  if (state.solved[id]) {
    const prob = findProblem(id);
    const xpGain = prob ? XP_MAP[prob.diff] : 10;
    showXPPop(`+${xpGain} XP`);
    showToast(`Marked as solved!`);
  }

  // Re-render current view
  const active = document.querySelector('.view.active')?.id;
  if (active === 'view-dashboard') renderDashboard();
  else if (active === 'view-roadmap') renderRoadmap();
  else if (active === 'view-problems') renderProblems(currentFilter);
  else if (active === 'view-stats') renderStats();

  document.getElementById('headerXP').textContent = getXP();
}

function toggleTopic(key, el) {
  state.checkedTopics[key] = !state.checkedTopics[key];
  saveState();
  el.classList.toggle('checked', state.checkedTopics[key]);
  el.querySelector('.topic-check').textContent = state.checkedTopics[key] ? '✓' : '';
}

// =============================================
// TOAST & XP POP
// =============================================
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('visible');
  setTimeout(() => t.classList.remove('visible'), 2000);
}

function showXPPop(msg) {
  const p = document.getElementById('xpPop');
  p.textContent = msg;
  p.classList.add('visible');
  setTimeout(() => p.classList.remove('visible'), 1200);
}

// =============================================
// CURSOR
// =============================================
function initCursor() {
  const cursor = document.getElementById('cursor');
  const trail = document.getElementById('cursorTrail');
  let tx = 0, ty = 0, cx = 0, cy = 0;

  document.addEventListener('mousemove', e => {
    tx = e.clientX; ty = e.clientY;
    cursor.style.left = tx + 'px';
    cursor.style.top = ty + 'px';
  });

  document.addEventListener('mousedown', () => cursor.classList.add('clicking'));
  document.addEventListener('mouseup', () => cursor.classList.remove('clicking'));

  function animTrail() {
    cx += (tx - cx) * 0.12;
    cy += (ty - cy) * 0.12;
    trail.style.left = cx + 'px';
    trail.style.top = cy + 'px';
    requestAnimationFrame(animTrail);
  }
  animTrail();

  // Change cursor on hover of interactive elements
  document.querySelectorAll('button, a, .phase-header, .problem-row, .prob-card, .dp-row, .topic-item')
    .forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

// =============================================
// PETALS BACKGROUND
// =============================================
function initPetals() {
  const container = document.getElementById('petals');
  const shapes = ['✿', '❋', '✦', '◌', '·'];
  const colors = ['#f9c5d1', '#c9e8c9', '#d5c5e8', '#fdd9b5', '#fbe8c8'];
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('span');
    p.className = 'petal';
    p.textContent = shapes[i % shapes.length];
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      color: ${colors[i % colors.length]};
      font-size: ${10 + Math.random() * 18}px;
      animation-delay: ${Math.random() * 8}s;
      animation-duration: ${6 + Math.random() * 8}s;
      opacity: ${0.2 + Math.random() * 0.35};
    `;
    container.appendChild(p);
  }
}

// =============================================
// INIT
// =============================================
window.addEventListener('DOMContentLoaded', () => {
  loadState();
  updateStreak();
  initCursor();
  initPetals();
  renderDashboard();

  // Re-attach cursor listeners after initial render
  setTimeout(() => {
    document.querySelectorAll('button, a, .phase-header, .problem-row, .prob-card, .dp-row, .topic-item, .phase-pill').forEach(el => {
      el.addEventListener('mouseenter', () => document.getElementById('cursor').classList.add('hover'));
      el.addEventListener('mouseleave', () => document.getElementById('cursor').classList.remove('hover'));
    });
  }, 300);
});
