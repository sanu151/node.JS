// unlink function will delete a file

const fs = require("fs");

fs.unlink("demo2.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully deleted");
  }
});
