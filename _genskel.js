/* temp skeleton generator for bulk banks (safe to delete after use) */
const fs = require("fs"), vm = require("vm");
function getNames(file, varName) {
  let src = fs.readFileSync(file, "utf8") + "\n;globalThis." + varName + " = " + varName + ";";
  const ctx = vm.createContext({});
  vm.runInContext(src, ctx, { filename: file });
  return ctx[varName].map(t => t.name);
}
function skeleton(file, varName, constName, tag) {
  const names = getNames(file, varName);
  let s = "/* ===== BULK BANK " + tag + " — 50 hard JEE Main PYQ-pattern MCQs per chapter ===== */\nconst " + constName + " = {\n";
  names.forEach((c, i) => {
    s += JSON.stringify(c) + ": [\n";
    for (const b of ["A", "B", "C", "D", "E"]) s += "/* @@" + tag + String(i + 1).padStart(2, "0") + b + "@@ */\n";
    s += "],\n";
  });
  s += "};\n";
  fs.writeFileSync("data_bulk_" + tag.toLowerCase() + ".js", s);
  console.log("data_bulk_" + tag.toLowerCase() + ".js: " + names.length + " chapters, " + (names.length * 5) + " slots");
}
skeleton("data_physics.js", "PHYSICS_TOPICS", "BULK_PH", "P");
skeleton("data_chemistry.js", "CHEMISTRY_TOPICS", "BULK_CH", "C");
skeleton("data_maths.js", "MATHS_TOPICS", "BULK_MA", "M");