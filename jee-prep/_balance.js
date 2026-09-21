/* temp brace-balance audit — safe to delete */
const fs = require("fs");
const lines = fs.readFileSync(process.argv[2], "utf8").split(/\r?\n/);
let depth = 0, inStr = null, esc = false;
lines.forEach((line, i) => {
  for (const ch of line) {
    if (esc) { esc = false; continue; }
    if (inStr) {
      if (ch === "\\") esc = true;
      else if (ch === inStr) inStr = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === "`") { inStr = ch; continue; }
    if (ch === "{" || ch === "[") depth++;
    if (ch === "}" || ch === "]") depth--;
  }
  console.log(String(i + 1).padStart(4) + " depth=" + depth + "  " + line.slice(0, 60));
});
