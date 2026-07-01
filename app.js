/* ===========================================================
   Certification Study Hub — shared app logic (cert-agnostic)
   Each cert page sets window.CERT_META before loading this file, and loads its
   own COURSE (data.js), VIDEO_QUIZZES + SECTION_EXAMS (quizzes.js),
   EXAM_BANK (exambank.js), and FLASHCARDS (flashcards.js).
   =========================================================== */

const META = window.CERT_META || {
  name: "Study Hub", code: "", playlist: "#",
  storeKey: "studyhub_progress_v1",
  domainWeights: { "1": 20, "2": 20, "3": 20, "4": 20, "5": 20 },
  examPass: 80, examScaled: 720, homeHref: "../index.html"
};
const PASS_PCT = 70;            // score needed to "pass" a quiz/exam
const STORE_KEY = META.storeKey;

/* ---------- Flatten course into an ordered list of videos ---------- */
const FLAT = [];                // [{sec, secName, obj, objName, id, title, idx}]
const SECTIONS = Object.keys(COURSE);
SECTIONS.forEach(sec => {
  const s = COURSE[sec];
  Object.keys(s.objs).forEach(obj => {
    s.objs[obj].videos.forEach(v => {
      FLAT.push({ sec, secName: s.name, obj, objName: s.objs[obj].name, id: v.id, title: v.title });
    });
  });
});
FLAT.forEach((v, i) => v.idx = i);
const TOTAL = FLAT.length;
const byId = id => FLAT.find(v => v.id === id);
const videosInSection = sec => FLAT.filter(v => v.sec === sec);

/* ---------- Progress (localStorage) ---------- */
let P = load();
function load() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || blank(); }
  catch { return blank(); }
}
function blank() { return { watched: {}, vquiz: {}, exam: {}, fcKnown: {}, finalBest: null, theme: "dark", last: null }; }
function save() { localStorage.setItem(STORE_KEY, JSON.stringify(P)); }
// migrate older saves that lack newer fields
if (!P.fcKnown) P.fcKnown = {};
if (!P.theme) P.theme = "dark";

const isWatched   = id  => !!P.watched[id];
const vQuizBest   = id  => P.vquiz[id] != null ? P.vquiz[id] : null;
const vQuizPassed = id  => vQuizBest(id) != null && vQuizBest(id) >= PASS_PCT;
const examBest    = sec => P.exam[sec] != null ? P.exam[sec] : null;
const examPassed  = sec => examBest(sec) != null && examBest(sec) >= PASS_PCT;
const videoDone   = id  => vQuizPassed(id);   // a video counts as "done" once its quiz is passed
const sectionVideosDone = sec => videosInSection(sec).every(v => videoDone(v.id));

/* ---------- App state ---------- */
let current = null;             // current video id, or "exam:N", or "dash"

/* ===========================================================
   Rendering
   =========================================================== */
const main = document.getElementById("main");
const navEl = document.getElementById("nav");

function renderSidebar() {
  const done = FLAT.filter(v => videoDone(v.id)).length;
  const pct = Math.round(done / TOTAL * 100);
  document.getElementById("overallFill").style.width = pct + "%";
  document.getElementById("overallText").textContent = `${done} / ${TOTAL} videos`;
  document.getElementById("overallPct").textContent = pct + "%";

  navEl.innerHTML = "";
  SECTIONS.forEach(sec => {
    const s = COURSE[sec];
    const vids = videosInSection(sec);
    const sdone = vids.filter(v => videoDone(v.id)).length;
    const open = current && current !== "dash" &&
      ((current.startsWith && current.startsWith("exam:")) ? current.split(":")[1] === sec : byId(current)?.sec === sec);

    const group = document.createElement("div");
    group.className = "section-group" + (open ? " open" : "");

    const head = document.createElement("button");
    head.className = "section-head";
    head.innerHTML = `<span class="chev">▶</span><span class="secnum">${sec}</span>
      <span>${s.name}</span><span class="pct">${sdone}/${vids.length}</span>`;
    head.onclick = () => { group.classList.toggle("open"); };
    group.appendChild(head);

    const body = document.createElement("div");
    body.className = "section-body";

    Object.keys(s.objs).forEach(obj => {
      const o = s.objs[obj];
      const lbl = document.createElement("div");
      lbl.className = "obj-label";
      lbl.textContent = `${obj} · ${o.name}`;
      body.appendChild(lbl);
      o.videos.forEach(v => {
        const item = document.createElement("button");
        const passed = vQuizPassed(v.id);
        item.className = "vid-item" + (passed ? " done" : "") + (isWatched(v.id) ? " watched" : "") +
          (current === v.id ? " active" : "");
        item.innerHTML = `<span class="dot">${passed ? "✓" : ""}</span><span class="txt">${v.title}</span>`;
        item.onclick = () => openVideo(v.id);
        body.appendChild(item);
      });
    });

    // Section exam button
    const unlocked = sectionVideosDone(sec);
    const exam = document.createElement("button");
    exam.className = "exam-item" + (unlocked ? "" : " locked") + (examPassed(sec) ? " passed" : "") +
      (current === "exam:" + sec ? " active" : "");
    const eb = examBest(sec);
    exam.innerHTML = `<span class="ico">📝</span><span>Section ${sec} Exam</span>
      <span class="st">${eb != null ? (examPassed(sec) ? "Passed " : "Best ") + eb + "%" : unlocked ? "Ready" : "🔒 Locked"}</span>`;
    exam.onclick = () => { if (unlocked) openExam(sec); else flash(exam); };
    body.appendChild(exam);

    // Flashcards button (always available)
    if (FLASHCARDS[sec]) {
      const fc = document.createElement("button");
      fc.className = "exam-item" + (current === "fc:" + sec ? " active" : "");
      fc.innerHTML = `<span class="ico">🃏</span><span>Section ${sec} Flashcards</span>
        <span class="st">${FLASHCARDS[sec].length} cards</span>`;
      fc.onclick = () => openFlashcards(sec);
      body.appendChild(fc);
    }

    group.appendChild(body);
    navEl.appendChild(group);
  });
}

function flash(el) {
  el.animate([{ opacity: 1 }, { opacity: .3 }, { opacity: 1 }], { duration: 400 });
}

/* ---------- Dashboard ---------- */
function openDashboard() {
  current = "dash";
  renderSidebar();
  const done = FLAT.filter(v => videoDone(v.id)).length;
  const next = FLAT.find(v => !videoDone(v.id)) || FLAT[0];

  let cards = SECTIONS.map(sec => {
    const s = COURSE[sec];
    const vids = videosInSection(sec);
    const sd = vids.filter(v => videoDone(v.id)).length;
    const pct = Math.round(sd / vids.length * 100);
    const ex = examBest(sec);
    const examUnlocked = sectionVideosDone(sec);
    return `<div class="scard">
      <div data-watch="${sec}" style="cursor:pointer">
        <div class="num">SECTION ${sec}</div>
        <h3>${s.name}</h3>
        <div class="bar"><div class="fill" style="width:${pct}%"></div></div>
        <div class="meta"><span>${sd}/${vids.length} videos</span>
          <span>${ex != null ? "Exam " + ex + "%" : "Exam not taken"}</span></div>
      </div>
      <div class="card-actions">
        <button class="mini-btn" data-watch="${sec}">▶ Videos</button>
        <button class="mini-btn" data-fc="${sec}">🃏 Flashcards</button>
        <button class="mini-btn ${examUnlocked ? "" : "locked"}" data-exam="${sec}">📝 Exam</button>
      </div>
    </div>`;
  }).join("");

  const finalBest = P.finalBest;
  main.innerHTML = `
    <div class="dash-hero">
      <h1>Welcome back 👋</h1>
      <p>Work through the videos one by one and quiz after each. Study key terms with <b>flashcards</b>,
      test each section, then take the <b>full practice exam</b> when you're ready.</p>
    </div>
    <div class="continue-card">
      <div class="info">
        <small>${done === 0 ? "Start here" : done === TOTAL ? "All done!" : "Continue learning"}</small>
        <h3>${done === TOTAL ? "🎉 You've completed every video!" : `${next.obj} · ${next.title}`}</h3>
      </div>
      <button class="btn" id="continueBtn">${done === 0 ? "Start course" : "Resume"} →</button>
    </div>
    <div class="exam-hero">
      <h3>🎓 Full Practice Exam</h3>
      <p>A CompTIA-style exam that pulls questions from across all five domains (weighted like the real ${META.code}),
      with a timer, a question navigator, and a domain-by-domain score breakdown.
      ${finalBest != null ? `<br><b>Your best score: ${finalBest}%</b>` : ""}</p>
      <div class="opts">
        <button class="opt-btn" id="examFull">Full exam<small>90 questions · 90 minutes</small></button>
        <button class="opt-btn" id="examQuick">Quick exam<small>30 questions · 30 minutes</small></button>
      </div>
    </div>
    <div class="cards">${cards}</div>
  `;
  document.getElementById("continueBtn").onclick = () => openVideo((P.last && byId(P.last)) ? P.last : next.id);
  document.getElementById("examFull").onclick = () => startFinalExam(90, 90);
  document.getElementById("examQuick").onclick = () => startFinalExam(30, 30);
  main.querySelectorAll("[data-watch]").forEach(el => el.onclick = e => {
    e.stopPropagation(); openVideo(videosInSection(el.dataset.watch)[0].id);
  });
  main.querySelectorAll("[data-fc]").forEach(el => el.onclick = e => {
    e.stopPropagation(); openFlashcards(el.dataset.fc);
  });
  main.querySelectorAll("[data-exam]").forEach(el => el.onclick = e => {
    e.stopPropagation();
    const sec = el.dataset.exam;
    if (sectionVideosDone(sec)) openExam(sec);
    else { alert(`Pass all ${videosInSection(sec).length} video quizzes in Section ${sec} to unlock its exam.`); }
  });
  window.scrollTo(0, 0);
}

/* ---------- Video view ---------- */
function openVideo(id) {
  current = id;
  P.last = id; save();
  const v = byId(id);
  const passed = vQuizPassed(id);
  const best = vQuizBest(id);
  const quiz = VIDEO_QUIZZES[id];
  const hasQuiz = quiz && quiz.length;

  main.innerHTML = `
    <div class="crumb"><span class="secnum">${v.obj}</span>${v.secName} › ${v.objName}</div>
    <h1 class="view-title">${v.title}</h1>
    <div class="view-meta">Video ${v.idx + 1} of ${TOTAL}${best != null ? ` · Quiz best: ${best}%` : ""}</div>
    <div class="video-wrap">
      <iframe src="https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1"
        title="${v.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </div>
    <div class="action-row">
      ${hasQuiz
        ? `<button class="btn" id="quizBtn">${passed ? "Retake quiz" : "Take the quiz →"}</button>`
        : `<span class="btn-note">Quiz coming soon for this video.</span>`}
      <button class="btn secondary" id="watchBtn">${isWatched(id) ? "✓ Marked watched" : "Mark as watched"}</button>
      ${prevOf(id) ? `<button class="btn secondary" id="prevBtn">← Previous</button>` : ""}
      ${nextOf(id) ? `<button class="btn secondary" id="nextBtn">Next video →</button>` : ""}
    </div>
    <div class="callout">
      💡 <b>How it works:</b> Watch the full video, then take the short quiz.
      Score <b>${PASS_PCT}%+</b> to mark this video complete and move on.
      ${passed ? '<span class="pass-text"> You\'ve already passed this one ✓</span>' : ""}
    </div>
  `;
  if (hasQuiz) document.getElementById("quizBtn").onclick = () => openVideoQuiz(id);
  document.getElementById("watchBtn").onclick = () => {
    P.watched[id] = true; save(); renderSidebar(); openVideo(id);
  };
  const pb = document.getElementById("prevBtn"); if (pb) pb.onclick = () => openVideo(prevOf(id).id);
  const nb = document.getElementById("nextBtn"); if (nb) nb.onclick = () => openVideo(nextOf(id).id);
  renderSidebar();
  window.scrollTo(0, 0);
  closeMobileNav();
}
const prevOf = id => FLAT[byId(id).idx - 1];
const nextOf = id => FLAT[byId(id).idx + 1];

/* ===========================================================
   Quiz engine (shared by per-video quiz and section exam)
   =========================================================== */
function runQuiz({ title, subtitle, questions, onFinish, onExit, regen }) {
  let i = 0, answers = new Array(questions.length).fill(null), locked = false;
  window.scrollTo(0, 0);

  function draw() {
    const q = questions[i];
    locked = answers[i] != null;
    const pct = Math.round((i) / questions.length * 100);
    main.innerHTML = `
      <div class="crumb">${subtitle}</div>
      <h1 class="view-title">${title}</h1>
      <div class="quiz-card">
        <div class="quiz-progress"><span>Question ${i + 1} of ${questions.length}</span>
          <span>${answers.filter(a => a != null).length} answered</span></div>
        <div class="quiz-bar"><div class="fill" style="width:${pct}%"></div></div>
        <p class="q-text">${q.q}</p>
        <div class="options" id="opts"></div>
        <div class="explain" id="explain"></div>
        <div class="quiz-foot">
          <button class="btn secondary" id="exitBtn">Exit</button>
          <button class="btn" id="nextQ" ${answers[i] == null ? "disabled" : ""}>
            ${i === questions.length - 1 ? "Finish & see results" : "Next question →"}</button>
        </div>
      </div>`;
    const optsEl = document.getElementById("opts");
    const keys = ["A", "B", "C", "D", "E", "F"];
    q.options.forEach((opt, oi) => {
      const b = document.createElement("button");
      b.className = "option";
      b.innerHTML = `<span class="key">${keys[oi]}</span><span>${opt}</span>`;
      if (locked) {
        b.classList.add("disabled");
        if (oi === q.answer) b.classList.add("correct");
        else if (oi === answers[i]) b.classList.add("wrong");
      }
      b.onclick = () => {
        if (answers[i] != null) return;       // lock after first choice
        answers[i] = oi;
        showExplain();
        draw();
      };
      optsEl.appendChild(b);
    });
    if (locked) showExplain();

    document.getElementById("exitBtn").onclick = onExit;
    document.getElementById("nextQ").onclick = () => {
      if (answers[i] == null) return;
      if (i === questions.length - 1) finish();
      else { i++; draw(); }
    };

    function showExplain() {
      const q = questions[i];
      const ok = answers[i] === q.answer;
      const ex = document.getElementById("explain");
      ex.className = "explain show " + (ok ? "ok" : "no");
      ex.innerHTML = `<b>${ok ? "✓ Correct" : "✗ Not quite"}</b> — ${q.explain || ("The correct answer is " + ["A","B","C","D","E","F"][q.answer] + ".")}`;
    }
  }

  function finish() {
    const correct = answers.reduce((n, a, k) => n + (a === questions[k].answer ? 1 : 0), 0);
    const score = Math.round(correct / questions.length * 100);
    const pass = score >= PASS_PCT;
    main.innerHTML = `
      <div class="crumb">${subtitle}</div>
      <h1 class="view-title">${title} — Results</h1>
      <div class="quiz-card result" style="--p:${score}; --c:${pass ? 'var(--green)' : 'var(--amber)'}">
        <div class="ring"><span>${score}%</span></div>
        <h2 class="${pass ? 'pass-text' : 'fail-text'}">${pass ? "Passed! 🎉" : "Almost there"}</h2>
        <p>You got <b>${correct} of ${questions.length}</b> correct.
          ${pass ? "This is marked complete." : `You need ${PASS_PCT}% to pass — review the video and try again.`}</p>
        <div class="btns">
          <button class="btn" id="retry">Retry quiz</button>
          <button class="btn secondary" id="review">Review answers</button>
          <button class="btn secondary" id="done">${pass ? "Continue →" : "Back to video"}</button>
        </div>
      </div>`;
    onFinish(score);
    document.getElementById("retry").onclick = () => runQuiz({ title, subtitle, questions: regen ? regen() : questions, onFinish, onExit, regen });
    document.getElementById("review").onclick = () => { i = 0; draw(); };
    document.getElementById("done").onclick = onExit;
    renderSidebar();
    window.scrollTo(0, 0);
  }

  draw();
}

/* ---------- Per-video quiz ---------- */
function openVideoQuiz(id) {
  const v = byId(id);
  const source = VIDEO_QUIZZES[id];
  runQuiz({
    title: v.title + " — Quiz",
    subtitle: `<span class="secnum">${v.obj}</span>${v.objName}`,
    questions: randomizeQuiz(source),
    regen: () => randomizeQuiz(source),
    onFinish: score => {
      const prev = vQuizBest(id);
      if (prev == null || score > prev) { P.vquiz[id] = score; save(); }
    },
    onExit: () => openVideo(id)
  });
}

/* ---------- Section exam ---------- */
function openExam(sec) {
  current = "exam:" + sec;
  const source = SECTION_EXAMS[sec] || [];
  if (!source.length) {
    main.innerHTML = `<h1 class="view-title">Section ${sec} Exam</h1><div class="callout">Exam questions coming soon.</div>`;
    return;
  }
  runQuiz({
    title: `Section ${sec} Exam — ${COURSE[sec].name}`,
    subtitle: `Cumulative test · ${source.length} questions · ${PASS_PCT}% to pass`,
    questions: randomizeQuiz(source),
    regen: () => randomizeQuiz(source),
    onFinish: score => {
      const prev = examBest(sec);
      if (prev == null || score > prev) { P.exam[sec] = score; save(); }
    },
    onExit: () => openDashboard()
  });
  renderSidebar();
}

/* ===========================================================
   Flashcards (Quizlet-style)
   =========================================================== */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

// Return a randomized copy of a quiz: question order shuffled AND answer options
// shuffled (with the correct-answer index remapped). Used for quizzes & section exams.
function randomizeQuiz(questions) {
  return shuffle(questions).map(q => {
    const idxs = shuffle(q.options.map((_, i) => i));
    return {
      q: q.q, explain: q.explain,
      options: idxs.map(i => q.options[i]),
      answer: idxs.indexOf(q.answer)
    };
  });
}

function openFlashcards(sec, onlyUnknown) {
  current = "fc:" + sec;
  renderSidebar();
  const deck = FLASHCARDS[sec];
  // build the working order (indices into deck)
  let order = deck.map((_, i) => i);
  if (onlyUnknown) order = order.filter(i => !P.fcKnown[sec + ":" + i]);
  if (!order.length) order = deck.map((_, i) => i); // nothing unknown -> study all
  let pos = 0, flipped = false;

  function knownCount() { return deck.filter((_, i) => P.fcKnown[sec + ":" + i]).length; }

  function draw() {
    if (pos >= order.length) return done();
    const idx = order[pos];
    const card = deck[idx];
    const known = !!P.fcKnown[sec + ":" + idx];
    const kc = knownCount();
    main.innerHTML = `
      <div class="crumb"><span class="secnum">${sec}</span>${COURSE[sec].name} › Flashcards</div>
      <h1 class="view-title">Flashcards</h1>
      <div class="fc-toolbar">
        <button class="btn secondary" id="fcShuffle">🔀 Shuffle</button>
        <button class="btn secondary" id="fcExit">Exit</button>
        <span class="fc-counter">Card ${pos + 1} / ${order.length} · ${kc}/${deck.length} known</span>
      </div>
      <div class="fc-progress-bar"><div class="fill" style="width:${Math.round(kc / deck.length * 100)}%"></div></div>
      <div class="flashcard${flipped ? " flipped" : ""}" id="fcCard">
        <div class="flashcard-inner">
          <div class="fc-face fc-front">
            <span class="tag">Term${known ? " · ✓ known" : ""}</span>
            <div class="term">${card.t}</div>
            <div class="hint">Click card to flip</div>
          </div>
          <div class="fc-face fc-back">
            <span class="tag">Definition</span>
            <div class="def">${card.d}</div>
          </div>
        </div>
      </div>
      <div class="fc-controls">
        <button class="round" id="fcPrev" ${pos === 0 ? "disabled" : ""}>◀</button>
        <button class="round" id="fcFlip">⟲</button>
        <button class="round" id="fcNext">▶</button>
      </div>
      <div class="fc-known">
        <button class="btn amber" id="fcLearning">↻ Still learning</button>
        <button class="btn green" id="fcKnow">✓ Got it</button>
      </div>`;
    const cardEl = document.getElementById("fcCard");
    const flip = () => { flipped = !flipped; cardEl.classList.toggle("flipped"); };
    cardEl.onclick = flip;
    document.getElementById("fcFlip").onclick = e => { e.stopPropagation(); flip(); };
    document.getElementById("fcPrev").onclick = () => { if (pos > 0) { pos--; flipped = false; draw(); } };
    document.getElementById("fcNext").onclick = () => { pos++; flipped = false; draw(); };
    document.getElementById("fcShuffle").onclick = () => { order = shuffle(order); pos = 0; flipped = false; draw(); };
    document.getElementById("fcExit").onclick = () => openDashboard();
    document.getElementById("fcKnow").onclick = () => { P.fcKnown[sec + ":" + idx] = true; save(); pos++; flipped = false; draw(); };
    document.getElementById("fcLearning").onclick = () => { delete P.fcKnown[sec + ":" + idx]; save(); pos++; flipped = false; draw(); };
    window.scrollTo(0, 0);
  }

  function done() {
    const kc = knownCount();
    const remaining = deck.length - kc;
    main.innerHTML = `
      <div class="crumb"><span class="secnum">${sec}</span>${COURSE[sec].name} › Flashcards</div>
      <h1 class="view-title">Deck complete 🃏</h1>
      <div class="quiz-card fc-done">
        <h2>${kc} / ${deck.length} terms marked as known</h2>
        <p style="color:var(--muted)">${remaining ? `You still have ${remaining} term(s) to master.` : "You've got every term in this section!"}</p>
        <div class="btns" style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:16px">
          ${remaining ? `<button class="btn" id="fcRetryUnknown">Study the ${remaining} I'm still learning</button>` : ""}
          <button class="btn secondary" id="fcRetryAll">Restart full deck</button>
          <button class="btn secondary" id="fcBack">Back to dashboard</button>
        </div>
      </div>`;
    if (remaining) document.getElementById("fcRetryUnknown").onclick = () => openFlashcards(sec, true);
    document.getElementById("fcRetryAll").onclick = () => openFlashcards(sec, false);
    document.getElementById("fcBack").onclick = () => openDashboard();
    window.scrollTo(0, 0);
  }

  draw();
}

/* ===========================================================
   Full practice exam (CompTIA-style, timed, domain-weighted)
   =========================================================== */
const DOMAIN_WEIGHTS = META.domainWeights;

// Build a pool of questions tagged by domain from the DEDICATED exam bank only
// (kept separate from the per-video quizzes and section exams).
function buildExamPool() {
  const pool = { "1": [], "2": [], "3": [], "4": [], "5": [] };
  Object.entries(EXAM_BANK).forEach(([sec, qs]) =>
    qs.forEach(q => pool[sec].push({ q: q.q, options: q.options, answer: q.answer, explain: q.explain, sec })));
  return pool;
}

function sampleExam(n) {
  const pool = buildExamPool();
  // distribute n across domains by weight
  const counts = {};
  let assigned = 0;
  SECTIONS.forEach(s => { counts[s] = Math.round(DOMAIN_WEIGHTS[s] / 100 * n); assigned += counts[s]; });
  // fix rounding to total exactly n
  let diff = n - assigned;
  const orderByWeight = SECTIONS.slice().sort((a, b) => DOMAIN_WEIGHTS[b] - DOMAIN_WEIGHTS[a]);
  let k = 0;
  while (diff !== 0) { const s = orderByWeight[k % orderByWeight.length]; counts[s] += diff > 0 ? 1 : -1; diff += diff > 0 ? -1 : 1; k++; }
  let picked = [];
  SECTIONS.forEach(s => { picked = picked.concat(shuffle(pool[s]).slice(0, counts[s])); });
  picked = shuffle(picked);
  // shuffle answer options per question
  return picked.map(q => {
    const idxs = shuffle(q.options.map((_, i) => i));
    return {
      q: q.q, sec: q.sec, explain: q.explain,
      options: idxs.map(i => q.options[i]),
      answer: idxs.indexOf(q.answer)
    };
  });
}

function startFinalExam(n, minutes) {
  const questions = sampleExam(n);
  runFinalExam(questions, minutes);
}

function runFinalExam(questions, minutes) {
  current = "final";
  renderSidebar();
  const answers = new Array(questions.length).fill(null);
  const flagged = new Array(questions.length).fill(false);
  let i = 0;
  const endTime = Date.now() + minutes * 60 * 1000;

  function fmt(ms) {
    const s = Math.max(0, Math.round(ms / 1000));
    return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
  }

  function draw() {
    const q = questions[i];
    const keys = ["A", "B", "C", "D", "E", "F"];
    main.innerHTML = `
      <div class="crumb">Full Practice Exam · ${questions.length} questions · ${minutes} min</div>
      <div class="exam-bar">
        <span class="exam-timer" id="examTimerEl">${fmt(endTime - Date.now())}</span>
        <span style="color:var(--muted);font-size:13px">${answers.filter(a => a != null).length}/${questions.length} answered</span>
        <span class="spacer"></span>
        <button class="flag-toggle ${flagged[i] ? "on" : ""}" id="flagBtn">⚑ ${flagged[i] ? "Flagged" : "Flag for review"}</button>
        <button class="btn" id="submitBtn">Submit exam</button>
      </div>
      <h1 class="view-title" style="font-size:20px">Question ${i + 1}</h1>
      <div class="quiz-card">
        <p class="q-text">${q.q}</p>
        <div class="options" id="opts"></div>
        <div class="quiz-foot">
          <button class="btn secondary" id="prevBtn" ${i === 0 ? "disabled" : ""}>← Previous</button>
          <button class="btn" id="nextBtn">${i === questions.length - 1 ? "Go to first unanswered" : "Next →"}</button>
        </div>
      </div>
      <div class="navigator" id="nav-grid"></div>
      <p style="color:var(--muted);font-size:12px">Blue = answered · ⚑ outline = flagged. Click any number to jump. You can change answers until you submit.</p>
    `;
    const optsEl = document.getElementById("opts");
    q.options.forEach((opt, oi) => {
      const b = document.createElement("button");
      b.className = "option" + (answers[i] === oi ? " selected" : "");
      b.innerHTML = `<span class="key">${keys[oi]}</span><span>${opt}</span>`;
      b.onclick = () => { answers[i] = oi; draw(); };
      optsEl.appendChild(b);
    });
    const grid = document.getElementById("nav-grid");
    questions.forEach((_, qi) => {
      const c = document.createElement("button");
      c.className = "nav-cell" + (answers[qi] != null ? " answered" : "") + (flagged[qi] ? " flagged" : "") + (qi === i ? " current" : "");
      c.textContent = qi + 1;
      c.onclick = () => { i = qi; draw(); };
      grid.appendChild(c);
    });
    document.getElementById("flagBtn").onclick = () => { flagged[i] = !flagged[i]; draw(); };
    document.getElementById("prevBtn").onclick = () => { if (i > 0) { i--; draw(); } };
    document.getElementById("nextBtn").onclick = () => {
      if (i < questions.length - 1) { i++; }
      else { const u = answers.findIndex(a => a == null); i = u === -1 ? 0 : u; }
      draw();
    };
    document.getElementById("submitBtn").onclick = () => {
      const unanswered = answers.filter(a => a == null).length;
      if (unanswered && !confirm(`You have ${unanswered} unanswered question(s). Submit anyway?`)) return;
      finish();
    };
    window.scrollTo(0, 0);
  }

  // self-cleaning timer: stops when the exam view is no longer on screen
  const timer = setInterval(() => {
    const el = document.getElementById("examTimerEl");
    if (!el) { clearInterval(timer); return; }
    const remain = endTime - Date.now();
    el.textContent = fmt(remain);
    if (remain <= 60000) el.classList.add("warn");
    if (remain <= 0) { clearInterval(timer); finish(true); }
  }, 1000);

  function finish(timedOut) {
    clearInterval(timer);
    const total = questions.length;
    const correct = answers.reduce((n, a, k) => n + (a === questions[k].answer ? 1 : 0), 0);
    const score = Math.round(correct / total * 100);
    const pass = score >= META.examPass; // approx passing on the real scaled exam
    // domain breakdown
    const dom = {}; SECTIONS.forEach(s => dom[s] = { c: 0, t: 0 });
    questions.forEach((q, k) => { dom[q.sec].t++; if (answers[k] === q.answer) dom[q.sec].c++; });
    const domHtml = SECTIONS.filter(s => dom[s].t).map(s => {
      const p = Math.round(dom[s].c / dom[s].t * 100);
      const col = p >= 83 ? "var(--green)" : p >= 60 ? "var(--amber)" : "var(--red)";
      return `<div class="domain-row">
        <span class="dname">${s}. ${COURSE[s].name}</span>
        <span class="dbar"><span class="fill" style="width:${p}%;background:${col}"></span></span>
        <span class="dscore">${dom[s].c}/${dom[s].t} · ${p}%</span>
      </div>`;
    }).join("");
    const keys = ["A", "B", "C", "D", "E", "F"];
    const reviewHtml = questions.map((q, k) => {
      const your = answers[k];
      const ok = your === q.answer;
      return `<div class="review-q">
        <div class="rq">${k + 1}. ${q.q}</div>
        <div class="ra ${ok ? "correct" : "wrong"}">Your answer: ${your != null ? keys[your] + ") " + q.options[your] : "(blank)"} ${ok ? "✓" : "✗"}</div>
        ${ok ? "" : `<div class="ra correct">Correct: ${keys[q.answer]}) ${q.options[q.answer]}</div>`}
        <div class="rexp">${q.explain || ""}</div>
      </div>`;
    }).join("");

    if (P.finalBest == null || score > P.finalBest) { P.finalBest = score; save(); }

    main.innerHTML = `
      <div class="crumb">Full Practice Exam — Results</div>
      <h1 class="view-title">Exam Results</h1>
      <div class="quiz-card result" style="--p:${score}; --c:${pass ? 'var(--green)' : 'var(--amber)'}">
        <div class="ring"><span>${score}%</span></div>
        <h2 class="${pass ? 'pass-text' : 'fail-text'}">${pass ? "Pass 🎉" : "Keep studying"}</h2>
        <p>${correct} of ${total} correct${timedOut ? " · ⏰ time expired" : ""}.
          Passing target is ~${META.examPass}% (≈${META.examScaled}/900 on the scaled exam).</p>
      </div>
      <h2 style="margin:28px 0 6px;font-size:18px">Score by domain</h2>
      ${domHtml}
      <div style="display:flex;gap:12px;margin:26px 0;flex-wrap:wrap">
        <button class="btn" id="examRetry">Take another exam</button>
        <button class="btn secondary" id="examHome">Back to dashboard</button>
      </div>
      <h2 style="margin:10px 0 6px;font-size:18px">Review all questions</h2>
      ${reviewHtml}
    `;
    document.getElementById("examRetry").onclick = () => startFinalExam(total, minutes);
    document.getElementById("examHome").onclick = () => openDashboard();
    renderSidebar();
    window.scrollTo(0, 0);
  }

  draw();
}

/* ===========================================================
   Theme
   =========================================================== */
function applyTheme() {
  const light = P.theme === "light";
  document.body.classList.toggle("light", light);
  const btn = document.getElementById("themeBtn");
  if (btn) btn.textContent = light ? "☀️ Light" : "🌙 Dark";
}

/* ===========================================================
   Wiring
   =========================================================== */
document.getElementById("resetBtn").onclick = () => {
  if (confirm("Reset ALL progress (watched videos, quiz scores, exams, flashcards)? This cannot be undone.")) {
    const theme = P.theme; P = blank(); P.theme = theme; save(); applyTheme(); openDashboard();
  }
};
const sidebar = document.getElementById("sidebar");
document.getElementById("menuBtn").onclick = () => sidebar.classList.toggle("show");
function closeMobileNav() { sidebar.classList.remove("show"); }

// Theme toggle
document.getElementById("themeBtn").onclick = () => {
  P.theme = P.theme === "light" ? "dark" : "light"; save(); applyTheme();
};

// Sidebar header (logo) -> dashboard
document.querySelector(".sidebar-header h1").style.cursor = "pointer";
document.querySelector(".sidebar-header h1").onclick = openDashboard;

applyTheme();
renderSidebar();
openDashboard();
