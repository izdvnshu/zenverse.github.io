/* ===== temp validator — schema + duplicates + coverage audit (safe to delete) ===== */
const fs = require("fs");
const vm = require("vm");

const BANKS = {
  physics: {
    base: ["data_physics.js", "PHYSICS_TOPICS"],
    extras: [
      ["data_extra_physics.js", "EXTRA_PHYSICS"],
      ["data_hard_physics.js", "HARD_PHYSICS"]
    ]
  },
  chemistry: {
    base: ["data_chemistry.js", "CHEMISTRY_TOPICS"],
    extras: [
      ["data_extra_chemistry.js", "EXTRA_CHEMISTRY"],
      ["data_hard_chemistry.js", "HARD_CHEMISTRY"]
    ]
  },
  maths: {
    base: ["data_maths.js", "MATHS_TOPICS"],
    extras: [
      ["data_extra_maths.js", "EXTRA_MATHS"],
      ["data_hard_maths.js", "HARD_MATHS"]
    ]
  }
};

const ctx = vm.createContext({});
const missing = [];
function load(file, varName) {
  if (!fs.existsSync(file)) { missing.push(file); return null; }
  const src = fs.readFileSync(file, "utf8") +
    "\n;globalThis." + varName + ' = typeof ' + varName + ' !== "undefined" ? ' + varName + " : null;";
  try { vm.runInContext(src, ctx, { filename: file }); }
  catch (e) { console.log("!! PARSE ERROR in " + file + " -> " + e.message); return null; }
  return ctx[varName];
}

const BAD_WORDS = /\b(verify|let me|recompute|check:|TODO|FIXME|approx\?|hmm)\b/i;
let grandTotal = 0;
for (const [subject, cfg] of Object.entries(BANKS)) {
  const topics = load(cfg.base[0], cfg.base[1]);
  if (!topics) continue;
  for (const [f, v] of cfg.extras) {
    const extra = load(f, v);
    if (!extra) continue;
    topics.forEach(t => { if (extra[t.name]) t.qs = t.qs.concat(extra[t.name]); });
    const orphan = Object.keys(extra).filter(k => !topics.some(t => t.name === k));
    if (orphan.length) console.log("!! " + f + " has keys with NO matching chapter: " + JSON.stringify(orphan));
  }
  console.log("\n================ " + subject.toUpperCase() + " ================");
  let total = 0, issues = 0;
  const seen = new Map();
  topics.forEach(t => {
    t.qs.forEach((q, i) => {
      const tag = t.name + " Q" + (i + 1);
      const bad = [];
      if (typeof q.q !== "string" || !q.q.trim()) bad.push("empty question");
      if (!Array.isArray(q.options) || q.options.length < 2) bad.push("options missing");
      else {
        if (q.options.some(o => typeof o !== "string" || !o.trim())) bad.push("empty option text");
        if (new Set(q.options.map(o => String(o).trim())).size !== q.options.length) bad.push("duplicate options");
        if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) bad.push("answer out of range");
      }
      if (!Array.isArray(q.steps) || q.steps.length < 2) bad.push("needs >=2 steps");
      else if (q.steps.some(s => typeof s !== "string" || !s.trim())) bad.push("empty step");
      if (typeof q.ans !== "string" || !q.ans.trim()) bad.push("empty ans");
      else {
        const letter = /\(option\s*([A-D])\)/i.exec(q.ans);
        if (Array.isArray(q.options) && letter && "ABCD".indexOf(letter[1].toUpperCase()) !== q.answer)
          bad.push('ans says option ' + letter[1].toUpperCase() + " but answer index " + q.answer + ' = "' + q.options[q.answer] + '"');
      }
      if (!["pyq", "imp", "hard"].includes(q.type)) bad.push("bad type: " + q.type);
      if (q.type === "pyq" && !q.year) bad.push("pyq without year");
      const text = String(q.q) + " " + String(q.ans) + " " + (q.options || []).join(" ") + " " + (q.steps || []).join(" ") + " " + (q.tip || "");
      if (BAD_WORDS.test(text)) bad.push("leftover scratch text");
      const key = String(q.q).replace(/\s+/g, " ").trim().toLowerCase();
      if (seen.has(key)) bad.push("DUPLICATE of " + seen.get(key));
      else seen.set(key, tag);
      if (bad.length) { issues++; console.log("  [" + tag + "] " + bad.join(" | ")); }
    });
    total += t.qs.length;
    console.log("  " + String(t.qs.length).padStart(3) + "  " + t.name);
  });
  grandTotal += total;
  console.log("  ------> " + subject.toUpperCase() + " TOTAL: " + total + " questions, " + issues + " schema issues");
}
console.log("\nGRAND TOTAL ACROSS SUBJECTS: " + grandTotal);
if (missing.length) console.log("NOT YET CREATED: " + missing.join(", "));
