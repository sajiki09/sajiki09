let lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
let userName = lines[0];
console.log(`Hello ${userName}`);

