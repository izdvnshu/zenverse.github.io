/* ===== Bulk bank validator: node _validatebulk.js <bulkfile.js> [more.js ...] ===== */
/* Checks: exact chapter-name match, exactly 50 Qs/chapter, full schema, answer-letter
   consistency, tip presence, and duplicates against EVERY existing site question. */
const fs = require("fs"), vm = require("vm");
const ctx = vm.createContext({});
function load(file) {
  let src = fs.readFileSync(file, "utf8");
  const names = [...src.matchAll(/const\s+([A-Z_0-9]+)\s*=/g)].map(m => m[1]);
  for (const n of names) src += "\n;if (typeof " + n + ' !== "undefined") globalThis.' + n + " = " + n + ";";
  try { vm.runInContext(src, ctx, { filename: file }); }
  catch (e) { console.log("!! PARSE ERROR in " + file + " -> " + e.message); process.exit(1); }
  return names;
}
for (const f of ["data_physics.js", "data_chemistry.js", "data_maths.js",
  "data_extra_physics.js", "data_extra_chemistry.js", "data_extra_maths.js",
  "data_hard_physics.js", "data_hard_chemistry.js", "data_hard_maths.js", "data_pyq50.js"]) load(f);

const chapterOwner = {};
const existing = [];
for (const [v, s] of [["PHYSICS_TOPICS", "PHYSICS"], ["CHEMISTRY_TOPICS", "CHEMISTRY"], ["MATHS_TOPICS", "MATHS"]]) {
  for (const t of ctx[v]) { chapterOwner[t.name] = s; for (const q of t.qs) existing.push(q.q); }
}
for (const v of ["EXTRA_PHYSICS", "EXTRA_CHEMISTRY", "EXTRA_MATHS",
  "HARD_PHYSICS", "HARD_CHEMISTRY", "HARD_MATHS",
  "PYQ50_PHYSICS", "PYQ50_CHEMISTRY", "PYQ50_MATHS"]) {
  const bank = ctx[v]; if (!bank) continue;
  for (const k of Object.keys(bank)) for (const q of bank[k]) existing.push(q.q);
}
const norm = s => String(s).replace(/\s+/g, " ").trim().toLowerCase();
const BAD = /\b(verify|let me|recompute|check:|TODO|FIXME|hmm)\b/i;
const seen = new Map(); for (const q of existing) seen.set(norm(q), "existing bank");
let grand = 0, issues = 0;

for (const f of process.argv.slice(2)) {
  if (!fs.existsSync(f)) { console.log("!! MISSING FILE: " + f); issues++; continue; }
  const src = fs.readFileSync(f, "utf8");
  const consts = load(f);
  console.log("\n########## " + f + " (" + consts.join(", ") + ") ##########");
  for (const cname of consts) {
    const bank = ctx[cname];
    if (!bank || typeof bank !== "object" || Array.isArray(bank)) { console.log("!! const " + cname + " is not a chapter-keyed object"); issues++; continue; }
    let fileTotal = 0;
    for (const k of Object.keys(bank)) {
      const qs = bank[k];
      if (!chapterOwner[k]) { console.log("  !! chapter key NOT FOUND on site: " + JSON.stringify(k)); issues++; }
      if (qs.length !== 50) { console.log("  !! " + k + ": " + qs.length + " questions (need exactly 50)"); issues++; }
      qs.forEach((q, i) => {
        const tag = k + " Q" + (i + 1); const bad = [];
        if (q.type !== "hard") bad.push("type");
        if (typeof q.q !== "string" || !q.q.trim()) bad.push("empty q");
        if (!Array.isArray(q.options) || q.options.length !== 4) bad.push("options!=4");
        else {
          if (new Set(q.options).size !== 4) bad.push("duplicate options");
          if (q.options.some(o => typeof o !== "string" || !o.trim())) bad.push("empty option");
          if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3) bad.push("answer index");
        }
        if (!Array.isArray(q.steps) || q.steps.length < 2 || q.steps.some(s => !String(s).trim())) bad.push("steps");
        const m = /\(option\s*([A-D])\)/i.exec(String(q.ans || ""));
        if (!m) bad.push("ans missing '(option X)'");
        else if (Array.isArray(q.options) && "ABCD".indexOf(m[1].toUpperCase()) !== q.answer)
          bad.push("ans letter mismatch: says " + m[1] + " but index " + q.answer);
        if (typeof q.tip !== "string" || !q.tip.trim()) bad.push("tip");
        const text = [q.q, q.ans, (q.options || []).join(" "), (q.steps || []).join(" "), q.tip].join(" ");
        if (BAD.test(text)) bad.push("scratch text");
        const key = norm(q.q);
        if (seen.has(key)) bad.push("DUPLICATE of " + seen.get(key));
        else seen.set(key, cname);
        if (bad.length) { issues++; if (issues <= 80) console.log("  [" + tag + "] " + bad.join(" | ")); }
      });
      fileTotal += qs.length;
    }
    console.log("  " + cname + ": " + Object.keys(bank).length + " chapters, " + fileTotal + " questions");
    grand += fileTotal;
  }
}
console.log("\nBULK TOTAL: " + grand + " questions | ISSUES: " + issues);
process.exit(issues ? 1 : 0);