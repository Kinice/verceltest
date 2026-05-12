const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/crash') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Crashing server...');
    process.exit(1);
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Server.js');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
