/* temp: count questions per chapter in bulk files + list remaining sentinels */
const fs = require("fs"), vm = require("vm");
for (const f of ["data_bulk_p.js", "data_bulk_c.js", "data_bulk_m.js"]) {
  const src = fs.readFileSync(f, "utf8");
  const ctx = vm.createContext({});
  const names = [...src.matchAll(/const\s+([A-Z_0-9]+)\s*=/g)].map(m => m[1]);
  let s2 = src;
  for (const n of names) s2 += "\n;globalThis." + n + " = " + n + ";";
  try { vm.runInContext(s2, ctx, { filename: f }); } catch (e) { console.log(f + " PARSE FAIL: " + e.message); continue; }
  console.log("=== " + f + " ===");
  for (const n of names) {
    const bank = ctx[n]; let tot = 0;
    for (const k of Object.keys(bank)) { console.log("  " + bank[k].length + "  " + k); tot += bank[k].length; }
    console.log("  FILE TOTAL: " + tot);
  }
  const sents = [...src.matchAll(/\/\* @@([A-Z0-9]+)@@ \*\//g)].map(m => m[1]);
  console.log("  remaining slots: " + sents.join(" "));
}