const http = require('http')
const url = require('url')

const port = 8000;

const server = http.createServer((req, res)=> {

    console.log(req.url, "==>> request url")
    if(req.url === "/") {
        res.end('this is my home page')
    } else if (req.url === '/about') {
        res.end('this is my about page')
    } else if (req.url === '/contact') {
        res.end('this is my contact page')
    } else if (req.url === '/aaloKiPlate') {
        res.end('aalo ki plate pakrao')
    } else {
        res.writeHead(404)
        res.end('this page is not available, 404 error')
    }
})

server.listen(port, '127.0.0.1', ()=> {
    console.log(`server is working on port number ${port}`)
})