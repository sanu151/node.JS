// os, path

const os = require("os");
// const { totalmem, freemem } = require("os");

//console.log(os);
// console.log(os.userInfo());
// console.log(os.hostname());
// console.log(os.homedir());
// console.log(totalmem());
// console.log(freemem());

// console.log(__dirname); // double underscore
// console.log(__filename);

const path = require("path");

// console.log(path);
const extensionName = path.extname("index.html");
console.log(extensionName);

const joinName = path.join(__dirname + "/../views");
console.log(joinName);
