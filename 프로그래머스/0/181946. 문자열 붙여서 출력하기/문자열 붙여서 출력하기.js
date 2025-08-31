const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split(" ");

const str1 = input[0];
const str2 = input[1];

console.log(str1 + str2);