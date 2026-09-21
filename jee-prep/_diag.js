/* temp: show exactly which field tripped the scratch-text filter + answer-letter mismatches */
const fs = require("fs"), vm = require("vm");
const BAD = /\b(verify|let me|recompute|check:|TODO|FIXME|approx\?|hmm)\b/i;
const files = ["data_physics.js", "data_chemistry.js", "data_maths.js", "data_extra_physics.js", "data_extra_chemistry.js"];
const ctx = vm.createContext({});
for (const f of files) {
  const src = fs.readFileSync(f, "utf8");
  const m = src.match(/const\s+([A-Z_]+)\s*=/);
  vm.runInContext(src + "\n;globalThis.__V = " + m[1] + ";\n;globalThis.__F = " + JSON.stringify(f) + ";", ctx, { filename: f });
  const val = ctx.__V;
  const rows = Array.isArray(val) ? val.map(t => [t.name, t.qs]) : Object.entries(val);
  for (const [name, qs] of rows) {
    qs.forEach((q, i) => {
      for (const field of ["q", "ans", "tip", ...Object.keys(q).filter(k => k === "steps")]) {
        const v = field === "steps" ? (q.steps || []).join(" || ") : q[field];
        if (typeof v === "string" && BAD.test(v)) console.log("SCRATCH " + f + " | " + name + " Q" + (i + 1) + " | " + field + " -> " + v.slice(0, 160));
      }
      const m2 = /\(option\s*([A-D])\)/i.exec(String(q.ans || ""));
      if (m2 && "ABCD".indexOf(m2[1].toUpperCase()) !== q.answer)
        console.log("MISMATCH " + f + " | " + name + " Q" + (i + 1) + " | answer index " + q.answer + ' = "' + q.options[q.answer] + '" but ans says option ' + m2[1].toUpperCase() + " | ans=\"" + q.ans + "\"");
    });
  }
}
