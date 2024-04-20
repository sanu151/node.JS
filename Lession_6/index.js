// Crate Server
const http = require("http");
const PORT = 3000;
const hostName = "127.0.0.1";

const server = http.createServer((req, res) => {
  res.end("Welcome");
});

server.listen(PORT, hostName, () => {
  console.log(`Server running at http://${hostName}:${PORT}`);
});
