const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
        // Serve index.html
        const filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading index.html');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        // Handle API request
        const query = url.parse(req.url, true).query;
        const a = parseFloat(query.a) || 0;
        const b = parseFloat(query.b) || 0;
        const sum = a + b;

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ result: sum }));
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
