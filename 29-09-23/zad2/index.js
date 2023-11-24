const http = require('http');
const { readFile } = require('fs').promises;

const hostname = '127.0.0.1'
const port = 3000
 
const server = http.createServer(async(req, res) => {
    const html = await readFile('index.html')
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.write(html)
    res.end()
})
 
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})