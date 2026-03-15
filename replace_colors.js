const fs = require("fs");
const path = require("path");

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach((file) => {
    filelist = fs.statSync(path.join(dir, file)).isDirectory()
      ? walkSync(path.join(dir, file), filelist)
      : filelist.concat(path.join(dir, file));
  });
  return filelist;
};

const files = walkSync("src").filter(
  (f) => f.endsWith(".tsx") || f.endsWith(".css"),
);

const replacements = [
  { regex: /#0d9488/gi, replacement: "#cb1b1a" },
  { regex: /#0f766e/gi, replacement: "#a51615" },
  { regex: /#1e3a8a/gi, replacement: "#681412" },
  { regex: /#152e73/gi, replacement: "#4a0e0d" },
  {
    regex: /-blue-(50|100|200|300|400|500|600|700|800|900|950)/g,
    replacement: "-red-$1",
  },
  {
    regex: /-teal-(50|100|200|300|400|500|600|700|800|900|950)/g,
    replacement: "-rose-$1",
  },
];

files.forEach((file) => {
  let content = fs.readFileSync(file, "utf8");
  let original = content;

  replacements.forEach((r) => {
    content = content.replace(r.regex, r.replacement);
  });

  if (content !== original) {
    fs.writeFileSync(file, content, "utf8");
    console.log(`Updated ${file}`);
  }
});
