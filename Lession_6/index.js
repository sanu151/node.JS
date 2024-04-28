// Crate Server
const http = require("http");
const PORT = 3000;
const hostName = "127.0.0.1";

// fs for handeling html fies
const fs = require("fs");

const server = http.createServer((req, res) => {
  const handleRequest = (statusCode, fileLocation) => {
    fs.readFile(fileLocation, (err, data) => {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  };

  if (req.url === "/") {
    handleRequest(200, "./views/index.html");
  } else if (req.url === "/about") {
    handleRequest(200, "./views/about.html");
  } else if (req.url === "/contact") {
    handleRequest(200, "./views/contact.html");
  } else {
    handleRequest(200, "./views/error.html");
  }
});

server.listen(PORT, hostName, () => {
  console.log(`Server running at http://${hostName}:${PORT}`);
});
