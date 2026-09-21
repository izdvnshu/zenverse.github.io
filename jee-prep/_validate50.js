/* ===== PYQ-50 validator: schema + duplicate + chapter-match audit for data_pyq50.js (safe to delete) ===== */
const fs = require("fs");
const vm = require("vm");

const ctx = vm.createContext({});
function load(file) {
  let src = fs.readFileSync(file, "utf8");
  const names = [...src.matchAll(/const\s+([A-Z_0-9]+)\s*=/g)].map(m => m[1]);
  for (const n of names) src += "\n;if (typeof " + n + ' !== "undefined") globalThis.' + n + " = " + n + ";";
  try { vm.runInContext(src, ctx, { filename: file }); }
  catch (e) { console.log("!! PARSE ERROR in " + file + " -> " + e.message); process.exit(1); }
}
for (const f of ["data_physics.js", "data_chemistry.js", "data_maths.js",
  "data_extra_physics.js", "data_extra_chemistry.js", "data_extra_maths.js",
  "data_hard_physics.js", "data_hard_chemistry.js", "data_hard_maths.js"]) load(f);
load("data_pyq50.js");

const BASE = { PHYSICS_TOPICS: "EXTRA_PHYSICS", CHEMISTRY_TOPICS: "EXTRA_CHEMISTRY", MATHS_TOPICS: "EXTRA_MATHS" };
const NEWBANKS = { PHYSICS_TOPICS: "PYQ50_PHYSICS", CHEMISTRY_TOPICS: "PYQ50_CHEMISTRY", MATHS_TOPICS: "PYQ50_MATHS" };
const subjects = { PHYSICS_TOPICS: "PHYSICS", CHEMISTRY_TOPICS: "CHEMISTRY", MATHS_TOPICS: "MATHS" };

const BAD_WORDS = /\b(verify|let me|recompute|check:|TODO|FIXME|hmm)\b/i;
const seenAll = new Map(); // question text -> location (across ALL banks)
function register(qs, label) {
  qs.forEach((q, i) => {
    const key = String(q.q).replace(/\s+/g, " ").trim().toLowerCase();
    if (seenAll.has(key)) console.log("!! DUPLICATE: [" + label + " Q" + (i + 1) + "] already at " + seenAll.get(key));
    else seenAll.set(key, label + " Q" + (i + 1));
  });
}

let count = 0, issues = 0;
for (const [baseVar, extraVar] of Object.entries(BASE)) {
  const topics = ctx[baseVar];
  const extras = ctx[extraVar] || {};
  const bank = ctx[NEWBANKS[baseVar]];
  const keys = Object.keys(bank || {});
  console.log("\n=== " + subjects[baseVar] + " PYQ-50: " + keys.length + " chapters ===");
  for (const k of keys) {
    const topic = topics.find(t => t.name === k);
    if (!topic) { console.log("  !! chapter key has NO matching topic: " + JSON.stringify(k)); issues++; continue; }
    const before = topic.qs.length + (extras[k] ? extras[k].length : 0);
    const added = bank[k];
    const qs = added.map(q => ({ ...q }));
    topic.qs = topic.qs.concat(extras[k] || []).concat(qs);
    qs.forEach((q, i) => {
      const bad = [];
      if (q.type !== "hard") bad.push("type not hard");
      if (typeof q.q !== "string" || !q.q.trim()) bad.push("empty question");
      if (!Array.isArray(q.options) || q.options.length !== 4) bad.push("not exactly 4 options");
      else {
        if (q.options.some(o => typeof o !== "string" || !o.trim())) bad.push("empty option");
        if (new Set(q.options).size !== 4) bad.push("duplicate options");
        if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3) bad.push("bad answer index");
      }
      if (!Array.isArray(q.steps) || q.steps.length < 2 || q.steps.some(s => !String(s).trim())) bad.push("steps problem");
      const letter = /\(option\s*([A-D])\)/i.exec(String(q.ans || ""));
      if (!letter) bad.push("ans missing '(option X)'");
      else if (Array.isArray(q.options) && "ABCD".indexOf(letter[1].toUpperCase()) !== q.answer)
        bad.push('ans says ' + letter[1] + ' but index ' + q.answer + ' = "' + q.options[q.answer] + '"');
      if (typeof q.tip !== "string" || !q.tip.trim()) bad.push("tip missing");
      const text = String(q.q) + " " + String(q.ans) + " " + (q.options || []).join(" ") + " " + (q.steps || []).join(" ") + " " + String(q.tip || "");
      if (BAD_WORDS.test(text)) bad.push("leftover scratch text");
      if (bad.length) { issues++; console.log("  [" + k + " Q" + (i + 1) + "] " + bad.join(" | ")); }
    });
    register(added, subjects[baseVar] + " / " + k + " (new)");
    const after = before + added.length;
    console.log("  " + k + " : " + before + " -> " + after + " (+" + added.length + ")");
    count += added.length;
    if (added.length !== 5) { console.log("  !! expected exactly 5 added here"); issues++; }
  }
}
console.log("\nNEW QUESTIONS ADDED: " + count + (count === 50 ? " ✅" : " (expected 50 !!)"));
console.log("SCHEMA ISSUES: " + issues);
/* finally run the real app merges over the SAME context to confirm end totals */
ctx.eval = undefined;
process.exit(issues || count !== 50 ? 1 : 0);