/* ===== temp headless smoke test — renders every question through app.js (safe to delete) ===== */
const fs = require("fs");
const vm = require("vm");

const DATA = [
  "data_physics.js", "data_chemistry.js", "data_maths.js",
  "data_extra_physics.js", "data_extra_chemistry.js", "data_extra_maths.js",
  "data_hard_physics.js", "data_hard_chemistry.js", "data_hard_maths.js",
  "data_pyq50.js"
];

const appEl = { innerHTML: "" };
const makeNodes = () => Array.from({ length: 400 }, () => ({ style: {} }));
const sandbox = {
  console,
  window: { scrollTo() {} },
  document: {
    getElementById: id => (id === "app" ? appEl : { style: {}, value: "", innerHTML: "" }),
    querySelectorAll: () => makeNodes()
  },
  setTimeout
};
sandbox.globalThis = sandbox;
const ctx = vm.createContext(sandbox);

const DRIVER = `
;globalThis.__RESULT = { home: false, subjects: {}, fails: [] };
try {
  renderHome();
  __RESULT.home = /subject-card/.test(document.getElementById("app").innerHTML);
} catch (e) { __RESULT.fails.push("renderHome: " + e.message); }
Object.keys(SUBJECTS).forEach(function(key){
  var topics = SUBJECTS[key].data();
  var total = 0, per = [];
  try {
    openSubject(key);
    renderSubject();
    if (!/chip/.test(document.getElementById("app").innerHTML)) __RESULT.fails.push(key + ": renderSubject produced no chapter chips");
  } catch (e) { __RESULT.fails.push(key + " renderSubject: " + e.message); }
  topics.forEach(function(t, i){
    try {
      openSubject(key);
      openTopic(i);
      var html = document.getElementById("app").innerHTML;
      var n = (html.match(/class="qcard"/g) || []).length;
      if (n !== t.qs.length) __RESULT.fails.push(key + " / " + t.name + ": rendered " + n + " of " + t.qs.length + " cards");
      var sols = (html.match(/Show Solution/g) || []).length;
      if (t.qs.length && sols !== t.qs.length) __RESULT.fails.push(key + " / " + t.name + ": " + sols + " solution buttons for " + t.qs.length + " questions");
      t.qs.forEach(function(q, qi){
        if (!q.options || q.options.length !== 4) __RESULT.fails.push(key + " / " + t.name + " Q" + (qi+1) + ": not exactly 4 options");
        if (!Array.isArray(q.steps) || q.steps.length < 2) __RESULT.fails.push(key + " / " + t.name + " Q" + (qi+1) + ": fewer than 2 steps");
        if (q.answer === undefined || q.options === undefined || !(q.answer >= 0 && q.answer < q.options.length)) __RESULT.fails.push(key + " / " + t.name + " Q" + (qi+1) + ": bad answer index");
      });
      filterQuestions("the");
      filterQuestions("");
      per.push([t.name, t.qs.length]);
      total += t.qs.length;
    } catch (e) { __RESULT.fails.push(key + " / " + t.name + ": " + e.message); }
  });
  __RESULT.subjects[key] = { chapters: topics.length, questions: total, per: per };
});
goHome();
`;

for (const f of DATA) {
  if (!fs.existsSync(f)) { console.log("skip (missing): " + f); continue; }
  try { vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: f }); }
  catch (e) { console.log("!! SCRIPT ERROR " + f + ": " + e.message); process.exitCode = 1; }
}

try {
  vm.runInContext(fs.readFileSync("app.js", "utf8") + DRIVER, ctx, { filename: "app.js + driver" });
} catch (e) { console.log("!! app.js FAILED: " + e.message); process.exit(1); }

const R = ctx.__RESULT;
console.log("home view renders: " + R.home);
let grand = 0;
for (const [key, s] of Object.entries(R.subjects)) {
  grand += s.questions;
  console.log(key.toUpperCase() + ": " + s.chapters + " chapters, " + s.questions + " questions");
  s.per.forEach(([name, n]) => console.log("    " + String(n).padStart(3) + "  " + name));
}
console.log("\nGRAND TOTAL: " + grand);
if (R.fails.length) { console.log("\n!! " + R.fails.length + " FAILURES:"); R.fails.slice(0, 40).forEach(f => console.log("   - " + f)); process.exitCode = 1; }
else console.log("SMOKE TEST PASSED ✅");

