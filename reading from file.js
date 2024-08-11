const fs = require("fs");

const contents = fs.readFileSync("a.txt" , "utf-8");
console.log(contents);

const content = fs.readFileSync("b.txt" , "utf-8");
console.log(content);