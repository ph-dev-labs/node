const http = require('http')

const server = http.createServer((req, res) => {
if(req.url === "/") {
    res.end('welcome home')
}
res.write('hello, welcome to the homepage')
res.end()
})

server.listen(5000)