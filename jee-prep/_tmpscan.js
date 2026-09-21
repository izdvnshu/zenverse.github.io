const fs = require("fs");
const vm = require("vm");
const p = process.argv[2];
const lines = fs.readFileSync(p, "utf8").split(/\r\n|\r|\n/);
for (let n = 2; n <= lines.length; n++) {
  const chunk = lines.slice(0, n).join("\n");
  try { new vm.Script(chunk, { filename: "prefix" }); }
  catch (e) {
    if (/end of input|Unexpected end/i.test(e.message)) continue;
    console.log("BREAK at file line", n, "ERR:", e.message);
    console.log(JSON.stringify(lines[n - 1]).slice(0, 200));
  }
}
console.log("scan done, total lines", lines.length);