// readFile function will read data from and existing file.

const fs = require("fs");

fs.readFile("demo.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
