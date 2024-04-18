// Import modules form module.js

// Method 1 : import selected methods.
// const { getName } = require("./module");

// Method 2: import all methods. (commented here)
const s1 = require("./module");

console.log(s1.getName());
console.log(s1.getAge());
console.log(s1.address);
