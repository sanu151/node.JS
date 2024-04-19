//  http res, req model and status code

const http = require("http");
const { clearScreenDown } = require("readline");
const port = 3000;
const hostname = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.writeHead(202, { "content-type": "text/html" }); // Custom status code
  res.write("JS server Started");
  res.end();
});

myServer.listen(port, hostname, () => {
  console.log(`Server is running successfully at http://${hostname}:${port}`);
});
