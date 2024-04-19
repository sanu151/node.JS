// http module - create http server

const http = require("http");
const hostName = "127.0.0.1";
const port = 3000;

const myServer = http.createServer((req, res) => {
  res.end("<b>Hello,</b> I am your first JS server");
});

myServer.listen(port, hostName, () => {
  console.log(`Server is running successfully at http://${hostName}:${port}`);
});
