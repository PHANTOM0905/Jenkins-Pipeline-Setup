const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const query = url.parse(req.url, true).query;
    const a = parseFloat(query.a) || 0;
    const b = parseFloat(query.b) || 0;
    const sum = a + b;

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ result: sum }));
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
