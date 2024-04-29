const http = require("http");
const fs = require("fs");

const PORT = "3000";

const handleRequest = (statusCode, fileLocation, req, res) => {
  fs.readFile(fileLocation, "utf-8", (err, data) => {
    if (err) {
      res.end(`Error : ${err.code}`);
    } else {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
};

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    handleRequest(200, "./views/index.html", req, res);
  } else if (req.url === "/about") {
    handleRequest(200, "./views/about.html", req, res);
  } else if (req.url === "/contact") {
    handleRequest(200, "./views/contact.html", req, res);
  } else {
    handleRequest(404, "./views/404.html", req, res);
  }
});

server.listen(PORT, () => {
  console.log("server is running");
});
