// Built in modules in node.js:
// fs-> File System
// writeFile()      writeFileSync()
// appendFile()     appendFileSync()
// readFile()       readFileSync()
// rename()         renameSync()
// unlink()         unlinkSync()
// exists()         existsSync()

const fs = require("fs");

// writeFile function from fs module is replace file if file is exist or if the file not exist it will create a new file.
fs.writeFile(
  "demo.txt",
  "If demd.txt exists, it will overwrite old file and create a new one.",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Successful");
    }
  }
);
