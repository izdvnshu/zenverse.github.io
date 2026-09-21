/* ===== ZENVERSE — App Logic ===== */
let CURRENT_SUBJECT = null;
let CURRENT_TOPIC = null;
let SEARCH_TERM = "";

const SUBJECTS = {
  physics: {
    name: "Physics", emoji: "⚛️", cls: "phys",
    desc: "Units to Electronics — every chapter, PYQ first, solution second.",
    data: () => PHYSICS_TOPICS
  },
  chemistry: {
    name: "Chemistry", emoji: "🧪", cls: "chem",
    desc: "Physical + Organic + Inorganic — solved the smart way.",
    data: () => CHEMISTRY_TOPICS
  },
  maths: {
    name: "Mathematics", emoji: "📐", cls: "math",
    desc: "From Sets to Vectors — shortest tricks + full steps.",
    data: () => MATHS_TOPICS
  }
};

function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}

function qCardHTML(q, idx, topicName){
  const badge = q.type === "pyq"
    ? `<span class="badge pyq">PYQ · ${q.year||"JEE Main"}</span>`
    : (q.type === "hard"
        ? `<span class="badge hard">TOUGH · MCQ</span>`
        : `<span class="badge imp">IMPORTANT</span>`);
  let opts = "";
  if(q.options){
    opts = `<div class="options">` + q.options.map((o,i)=>
      `<div class="${(q.answer!==undefined && i===q.answer) ? "correct":""}">${"ABCD"[i]}) ${esc(o)}</div>`).join("") + `</div>`;
  }
  let steps = q.steps.map((s,i)=>`<div class="step"><b class="stno">STEP ${i+1}</b>${esc(s)}</div>`).join("");
  const tip = q.tip ? `<div class="tip-box"><b>⚡ SHORTEST WAY:</b> ${esc(q.tip)}</div>` : "";
  return `
  <div class="qcard">
    <div class="qhead"><span>Q${idx+1} · ${esc(topicName)}</span>${badge}</div>
    <div class="qbody">
      <div class="qtext">${esc(q.q)}</div>
      ${opts}
      ${q.year && q.type==="pyq" ? `<div class="qyear">📍 ${esc(q.year)}</div>` : ""}
      <div style="margin-top:18px">
        <button class="btn solve" onclick="toggleSolution(this)">Show Solution 👀</button>
      </div>
      <div class="solution">
        <h4>✅ Step-by-Step Solution</h4>
        ${steps}
        <div class="answer-line"><span class="lbl">ANSWER:</span>${esc(q.ans)}</div>
        ${tip}
      </div>
    </div>
  </div>`;
}

function toggleSolution(btn){
  const sol = btn.parentElement.nextElementSibling;
  const open = sol.classList.toggle("open");
  btn.textContent = open ? "Hide Solution 🙈" : "Show Solution 👀";
  btn.classList.toggle("hide-sol", open);
}

/* ---------- SCROLL REVEAL ANIMATIONS ---------- */
let REVEAL_OBSERVER = null;
const STAGGER = { lastT: 0, step: 0 };

function getRevealObserver(){
  if(REVEAL_OBSERVER) return REVEAL_OBSERVER;
  REVEAL_OBSERVER = new window.IntersectionObserver((entries)=>{
    /* time-window stagger: elements revealed within ~150ms of each other
       cascade, regardless of how the observer batches its entries.
       State lives in the observer closure so it survives across callbacks. */
    entries.forEach(entry=>{
      if(!entry.isIntersecting) return;
      const el = entry.target;
      REVEAL_OBSERVER.unobserve(el);
      const now = (typeof performance !== "undefined" && performance.now) ? performance.now() : Date.now();
      if(now - STAGGER.lastT > 150) STAGGER.step = 0;
      STAGGER.lastT = now;
      const delay = Math.min(STAGGER.step * 0.06, 0.42);
      STAGGER.step++;
      el.style.transitionDelay = delay.toFixed(2) + "s";
      el.classList.add("in");
      /* clean up once revealed so native hover transitions stay fast */
      const clean = ()=>{
        el.style.transitionDelay = "";
        el.classList.remove("reveal","in","rv-zoom","rv-left","rv-right");
      };
      el.addEventListener("transitionend",(ev)=>{
        if(ev.target === el && ev.propertyName === "opacity") clean();
      },{once:true});
      setTimeout(clean, delay * 1000 + 850); /* safety fallback */
    });
  },{threshold:0.12, rootMargin:"0px 0px -6% 0px"});
  return REVEAL_OBSERVER;
}

function applyReveal(){
  if(!("IntersectionObserver" in window)) return;
  const app = document.getElementById("app");
  const obs = getRevealObserver();
  app.querySelectorAll(".hero,.backbar,.sec-title,.subject-card,.chip,.search-row,.qcard,.faq-item,.no-results")
    .forEach(el=>{
      if(el.classList.contains("reveal")) return;
      const cls = ["reveal"];
      if(el.classList.contains("subject-card")) cls.push("rv-zoom");
      else if(el.classList.contains("backbar") || el.classList.contains("sec-title")) cls.push("rv-left");
      else if(el.classList.contains("faq-item")) cls.push("rv-right");
      el.classList.add(...cls);
      obs.observe(el);
    });
}

/* ---------- VIEWS ---------- */
function goHome(){ CURRENT_SUBJECT = CURRENT_TOPIC = null; SEARCH_TERM = ""; renderHome(); }

function openSubject(key){
  CURRENT_SUBJECT = key; CURRENT_TOPIC = null; SEARCH_TERM = "";
  renderSubject();
  window.scrollTo(0,0);
}

function openTopic(i){ CURRENT_TOPIC = i; SEARCH_TERM = ""; renderTopic(); window.scrollTo(0,0); }

function renderHome(){
  const app = document.getElementById("app");
  app.innerHTML = `
  <div class="wrap">
    <section class="hero">
      <span class="tag">🔥 CLASS 11 + JEE MAINS</span>
      <h1>Solve. Learn. <span class="hl">Repeat.</span></h1>
      <p>Real JEE Mains PYQs + most-important questions — <b>question first, solution after</b> (exactly how the exam hits you), with full step-by-step working AND the shortest trick for each.</p>
      <div class="steps"><span>1️⃣ Read the question</span><span>2️⃣ Try it yourself</span><span>3️⃣ Reveal solution + trick</span></div>
    </section>
    <div class="sec-title"><h2>📚 Pick Your Subject</h2><div class="bar"></div></div>
    <div class="subject-grid">
      ${Object.entries(SUBJECTS).map(([key,s])=>`
        <div class="subject-card ${s.cls}" onclick="openSubject('${key}')">
          <div class="folder">
            <div class="folder-back"></div>
            <div class="paper p1"></div>
            <div class="paper p3"></div>
            <div class="paper p2"><span class="f-emoji" aria-hidden="true">${s.emoji}</span></div>
            <div class="folder-front">
              <h2>${s.name}</h2>
              <span class="meta">${s.data().length} CHAPTERS</span>
              <p>${s.desc}</p>
              <button class="open-btn">OPEN →</button>
            </div>
          </div>
        </div>`).join("")}
    </div>
    <div class="sec-title" id="faq"><h2>❓ FAQs</h2><div class="bar"></div></div>
    ${FAQS.map(f=>`<details class="faq-item"><summary>${esc(f.q)}</summary><div class="faq-a">${esc(f.a)}</div></details>`).join("")}
  </div>`;
  applyReveal();
}

function renderSubject(){
  const s = SUBJECTS[CURRENT_SUBJECT];
  const topics = s.data();
  const app = document.getElementById("app");
  app.innerHTML = `
  <div class="wrap">
    <div class="backbar">
      <button class="btn" onclick="goHome()">← Home</button>
      <h2 class="chunky" style="font-size:1.4rem">${s.emoji} ${s.name} — All Chapters</h2>
    </div>
    <div class="chip-cloud">
      ${topics.map((t,i)=>`<span class="chip" onclick="openTopic(${i})">${esc(t.name)} <small>(${t.qs.length})</small></span>`).join("")}
    </div>
  </div>`;
  applyReveal();
}

function renderTopic(){
  const s = SUBJECTS[CURRENT_SUBJECT];
  const t = s.data()[CURRENT_TOPIC];
  const app = document.getElementById("app");
  app.innerHTML = `
  <div class="wrap">
    <div class="backbar">
      <button class="btn" onclick="renderSubject()">← All Chapters</button>
      <button class="btn" onclick="goHome()">🏠</button>
      <h2 class="chunky" style="font-size:1.3rem">${s.emoji} ${esc(t.name)}</h2>
    </div>
    <div class="chip-cloud" style="margin-bottom:26px">
      ${s.data().map((tt,i)=>`<span class="chip ${i===CURRENT_TOPIC?"active":""}" onclick="openTopic(${i})">${esc(tt.name)}</span>`).join("")}
    </div>
    <div class="search-row"><input id="qsearch" placeholder="🔍 Search within these questions…" oninput="filterQuestions(this.value)"></div>
    <div id="qlist">${t.qs.map((q,i)=>qCardHTML(q,i,t.name)).join("")}</div>
    <div id="nores" class="no-results" style="display:none">😕 No question matched. Try another word!</div>
  </div>`;
  applyReveal();
}

function filterQuestions(term){
  SEARCH_TERM = term.toLowerCase();
  const s = SUBJECTS[CURRENT_SUBJECT];
  const t = s.data()[CURRENT_TOPIC];
  const cards = document.querySelectorAll("#qlist .qcard");
  let visible = 0;
  t.qs.forEach((q,i)=>{
    const hay = (q.q + " " + q.ans + " " + q.steps.join(" ")).toLowerCase();
    const show = !SEARCH_TERM || hay.includes(SEARCH_TERM);
    cards[i].style.display = show ? "" : "none";
    if(show) visible++;
  });
  document.getElementById("nores").style.display = visible ? "none" : "";
}

/* ---------- FAQ DATA ---------- */
const FAQS = [
  {q:"Are these questions enough for JEE Mains?", a:"These cover every chapter of the official NTA syllabus with PYQs + high-weightage important questions. Use them to build concepts and pattern recognition, then add full-length mocks for speed."},
  {q:"Why is the solution hidden below the question?", a:"That's deliberate — the real exam gives you the question first with no hints. Attempt for 3–5 minutes, then open the solution. Reading solutions directly = zero retention."},
  {q:"What is the 'Shortest Way' tip?", a:"Every solution ends with the smallest/easiest method a topper would use — approximation, symmetry, option elimination or a 1-line formula — so you can solve the same question in under 30 seconds."},
  {q:"Do PYQs repeat in JEE Mains?", a:"Concepts repeat every single year; sometimes near-identical numericals appear with changed values. That's why PYQ-first practice is the highest-ROI preparation."},
  {q:"How many hours should a Class 11 student study daily?", a:"Quality over quantity: 4–6 focused hours (about 2 per subject) with active problem-solving beats 10 hours of passive reading. One PYQ set daily is ideal."},
  {q:"Chemistry feels like cramming — how to fix it?", a:"Split it: Physical = numericals (practise like Physics), Organic = mechanisms (understand, don't memorise), Inorganic = NCERT lines + repetition (make a one-page sheet per chapter)."},
  {q:"Are calculators allowed in JEE Mains?", a:"No. So practise mental math, standard values (√2≈1.41, √3≈1.73, g≈10) and option-based elimination from day one."},
  {q:"Class 11 vs Class 12 — what weightage?", a:"Roughly 40:60 in favour of Class 12 recently, but Class 11 topics like Rotational Motion, Thermodynamics, Coordination Compounds and Sequences & Series stay high-weightage. Never skip 11th."}
];

/* ---------- MERGE EXTRA QUESTION BANKS ---------- */
function mergeExtra(topics, extra){
  if(!extra) return;
  topics.forEach(t=>{ if(extra[t.name]) t.qs = t.qs.concat(extra[t.name]); });
}
mergeExtra(PHYSICS_TOPICS, typeof EXTRA_PHYSICS!=="undefined" ? EXTRA_PHYSICS : null);
mergeExtra(CHEMISTRY_TOPICS, typeof EXTRA_CHEMISTRY!=="undefined" ? EXTRA_CHEMISTRY : null);
mergeExtra(MATHS_TOPICS, typeof EXTRA_MATHS!=="undefined" ? EXTRA_MATHS : null);
mergeExtra(PHYSICS_TOPICS, typeof HARD_PHYSICS!=="undefined" ? HARD_PHYSICS : null);
mergeExtra(CHEMISTRY_TOPICS, typeof HARD_CHEMISTRY!=="undefined" ? HARD_CHEMISTRY : null);
mergeExtra(MATHS_TOPICS, typeof HARD_MATHS!=="undefined" ? HARD_MATHS : null);
/* PYQ-50 bank: 5 extra hard PYQs each for the 10 most under-served high-weightage chapters */
mergeExtra(PHYSICS_TOPICS, typeof PYQ50_PHYSICS!=="undefined" ? PYQ50_PHYSICS : null);
mergeExtra(CHEMISTRY_TOPICS, typeof PYQ50_CHEMISTRY!=="undefined" ? PYQ50_CHEMISTRY : null);
mergeExtra(MATHS_TOPICS, typeof PYQ50_MATHS!=="undefined" ? PYQ50_MATHS : null);

renderHome();

