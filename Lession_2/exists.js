// exists function will return a result about a file exists or not

const fs = require("fs");

fs.exists("demo.txt", (result) => {
  if (result) {
    console.log("Found");
  } else {
    console.log("Not Found");
  }
});
