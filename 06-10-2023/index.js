const http = require('http')
const fs = require('fs/promises');
const parse = require('path')
const path = require('path'); 
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer(async (req, res) => {
    const url = req.url
    const method = req.method
    if(url === '/'){
        res.statusCode = 200
        const html = await fs.readFile('main.html')
        res.setHeader('Content-Type', 'text/html')
        res.write(html)
        res.end()
    }
    else if(url === '/kontakt' && method == 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', async () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            await fs.writeFile(`contact/message-${Date.now().toString()}.txt`, message)
            res.statusCode = 302
            res.setHeader('Location', './dziekujemy')
            res.end()
        })
    }
    else if (url === '/api') {
        const directoryPath = path.join(__dirname, 'contact');
        
        try {
            const files = await fs.readdir(directoryPath);
            const txtFiles = files.filter(file => file.endsWith('.txt'));
            const fileContents = await Promise.all(txtFiles.map(async file => {
                const filePath = path.join(directoryPath, file);
                const content = await fs.readFile(filePath, 'utf8');
                return { name: file, content: decodeURIComponent(content) };
            }));

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify(fileContents));
            res.end();
        } catch (error) {
            console.error(error);
            res.statusCode = 500;
            res.end('Internal Server Error');
        }
    }
    else if(url === "/dziekujemy"){
        res.statusCode = 200
        const html = await fs.readFile('thank-you.html')
        res.setHeader('Content-Type', 'text/html')
        res.write(html)
        res.end()
    }
    else{
        res.statusCode = 404
        const error = {
            'code' : 404,
            'message' : 'page not found'
        }
        res.setHeader('Content-Type', 'aplication-json')
        res.write(JSON.stringify(error))
        res.end()
    }

})

server.listen(port, hostname, () => {
    console.log(`Server running`)
})
