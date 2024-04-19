// appendFile function is append data with existing file.

const fs = require("fs");

fs.appendFile(
  "demo.txt",
  "append file function is append data with existing file.",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Success");
    }
  }
);
