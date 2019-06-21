const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hi guys is Edwin Diaz</h1>');
});

server.listen(9111);

console.log("Our Server is running");