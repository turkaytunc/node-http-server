const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method !== 'GET') return error(res, 400);
  if (req.url === '/todo') return res.end('/todo route');
  if (req.url === '/') return console.log('/ route');
  if (req.url === '/app') return res.end(JSON.stringify({ message: 'hello' }));
  return error(res, 404);
});

function error(res, code) {
  res.statusCode = code;
  res.end(`{"error": "${http.STATUS_CODES[code]}"}`);
}

server.listen(4000, 'localhost', () => {
  console.log('server listen http://localhost:4000');
});
