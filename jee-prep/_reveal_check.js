/* ===== temp headless check for scroll-reveal logic (safe to delete) ===== */
const fs = require("fs");
const vm = require("vm");

let observed = [];
let totalObserved = 0;
class FakeIO {
  constructor(cb, opts) { this.cb = cb; this.opts = opts; }
  observe(el) { observed.push(el); totalObserved++; this.cb([{ isIntersecting: true, target: el }]); }
  unobserve(el) { observed = observed.filter(e => e !== el); }
}

function makeEl(cls) {
  const el = {
    style: {}, _c: new Set(cls.split(" ").filter(Boolean)), _l: {},
    addEventListener(t, f, o) { (this._l[t] = this._l[t] || []).push(f); },
    fire(t, ev) { (this._l[t] || []).forEach(f => f(ev)); }
  };
  Object.defineProperty(el, "classList", { value: {
    add: (...a) => a.forEach(x => el._c.add(x)),
    remove: (...a) => a.forEach(x => el._c.delete(x)),
    contains: x => el._c.has(x)
  }});
  return el;
}

const els = {
  hero: makeEl("hero"),
  sc: [makeEl("subject-card phys"), makeEl("subject-card chem"), makeEl("subject-card math")],
  sec: makeEl("sec-title"),
  chips: [makeEl("chip"), makeEl("chip"), makeEl("chip"), makeEl("chip"), makeEl("chip"), makeEl("chip"), makeEl("chip"), makeEl("chip"), makeEl("chip"), makeEl("chip"), makeEl("chip"), makeEl("chip")],
  faq: [makeEl("faq-item"), makeEl("faq-item")],
  app: null
};
els.app = { innerHTML: "", querySelectorAll: () => [els.hero, ...els.sc, els.sec, ...els.chips, ...els.faq] };

const sandbox = {
  console,
  window: { scrollTo() {}, IntersectionObserver: FakeIO },
  document: {
    getElementById: id => (id === "app" ? els.app : { style: {} }),
    querySelectorAll: () => []
  },
  setTimeout
};
sandbox.globalThis = sandbox;
const ctx = vm.createContext(sandbox);

for (const f of ["data_physics.js", "data_chemistry.js", "data_maths.js"]) {
  if (fs.existsSync(f)) vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: f });
}
vm.runInContext(fs.readFileSync("app.js", "utf8"), ctx, { filename: "app.js" });


const fails = [];
const check = (name, cond) => { console.log((cond ? "PASS" : "FAIL") + "  " + name); if (!cond) fails.push(name); };

/* after renderHome, every element should be revealed ("in") and staggered */
check("observed count = 19 elements", totalObserved === 19);
check("hero got 'in' + reveal classes", els.hero._c.has("reveal") && els.hero._c.has("in"));
check("subject-card got rv-zoom", els.sc[0]._c.has("rv-zoom"));
check("sec-title got rv-left", els.sec._c.has("rv-left"));
check("faq got rv-right", els.faq[0]._c.has("rv-right"));
check("stagger delays applied", Math.abs(parseFloat(els.sc[0].style.transitionDelay) - 0.06) < 1e-9 && Math.abs(parseFloat(els.sc[2].style.transitionDelay) - 0.18) < 1e-9);

/* first chip index = 5 elements before it → delay 5*0.06 = 0.30 */
check("chip stagger accumulates across sync delivery", Math.abs(parseFloat(els.chips[0].style.transitionDelay) - 0.3) < 1e-9);
check("late chips capped at 0.42s", Math.abs(parseFloat(els.chips[6].style.transitionDelay) - 0.42) < 1e-9);

/* unobserved after reveal */
setTimeout(() => {
  check("elements unobserved after reveal", observed.length === 0);

  /* simulate transitionend on hero → classes cleaned */
  els.hero.fire("transitionend", { target: els.hero, propertyName: "opacity" });
  check("hero cleaned after transitionend", !els.hero._c.has("reveal") && !els.hero._c.has("in") && els.hero._c.has("hero") && els.hero.style.transitionDelay === "");

  /* re-render: elements must be re-tagged (applyReveal re-runs) */
  ctx.renderHome();
  check("re-render re-tags reveal", els.hero._c.has("reveal") && els.hero._c.has("in"));

  /* fallback timeout cleanup path */
  setTimeout(() => {
    check("fallback timer cleans classes", !els.hero._c.has("reveal") && els.hero.style.transitionDelay === "");
    console.log(fails.length ? "\n!! " + fails.length + " FAILURES" : "\nREVEAL CHECK PASSED ✅");
    process.exitCode = fails.length ? 1 : 0;
  }, 1400);
}, 50);
