/* temp audit script — safe to delete */
const fs = require("fs");
const vm = require("vm");
const files = [
  "data_physics.js", "data_chemistry.js", "data_maths.js",
  "data_extra_physics.js", "data_extra_chemistry.js", "data_extra_maths.js"
];
const ctx = vm.createContext({});
const report = {};
const declared = {
  "data_physics.js": "PHYSICS_TOPICS",
  "data_chemistry.js": "CHEMISTRY_TOPICS",
  "data_maths.js": "MATHS_TOPICS",
  "data_extra_physics.js": "EXTRA_PHYSICS",
  "data_extra_chemistry.js": "EXTRA_CHEMISTRY",
  "data_extra_maths.js": "EXTRA_MATHS"
};
for (const f of files) {
  if (!fs.existsSync(f)) { report[f] = "MISSING FILE"; continue; }
  const name = declared[f];
  try {
    const src = fs.readFileSync(f, "utf8") + "\n;globalThis." + name + " = typeof " + name + ' !== "undefined" ? ' + name + " : undefined;";
    vm.runInContext(src, ctx, { filename: f });
  } catch (e) {
    report[f] = "ERROR: " + e.message;
    continue;
  }
}
const banks = {
  "data_physics.js": "PHYSICS_TOPICS",
  "data_chemistry.js": "CHEMISTRY_TOPICS",
  "data_maths.js": "MATHS_TOPICS",
  "data_extra_physics.js": "EXTRA_PHYSICS",
  "data_extra_chemistry.js": "EXTRA_CHEMISTRY",
  "data_extra_maths.js": "EXTRA_MATHS"
};
for (const [f, varName] of Object.entries(banks)) {
  if (!(varName in ctx)) { report[f] = varName + " NOT DEFINED" + (report[f] ? " | " + report[f] : ""); continue; }
  const val = ctx[varName];
  report[f] = Array.isArray(val)
    ? val.map(t => `${t.name} :: ${t.qs.length}`)
    : Object.entries(val).map(([k, v]) => `${k} :: ${v.length}`);
}
for (const [f, lines] of Object.entries(report)) {
  console.log("\n=== " + f + " ===");
  if (typeof lines === "string") { console.log("  " + lines); continue; }
  let total = 0;
  lines.forEach(l => { console.log("  " + l); const n = Number(l.split(":: ")[1]); if (!isNaN(n)) total += n; });
  console.log("  TOTAL: " + total);
}
