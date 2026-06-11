const http = require('http');

const PORT = 5000;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Backend Running Successfully');
}).listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});