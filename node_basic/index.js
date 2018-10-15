const http = require('http')//Es el típico import from
const port = 3000

http.createServer((request, response) => {
    response.writeHead(200, {'Content-type': 'text/html'})
    response.end('<h1>El servidor dice "Hola mundo"</h1>')
}).listen(port)
console.log('Server ejecutandose en http://localhost' + port)