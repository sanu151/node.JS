// rename function will change a file name to a new name.

const fs = require("fs");

fs.rename("demo.txt", "demo2.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Success");
  }
});
