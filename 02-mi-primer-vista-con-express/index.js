const http = require('http')
const port = 5000

const server = http.createServer((req, res) => {
	res.end('esta es la respuesta 🚀 ')
})

server.listen(port, () => console.log('funcionando 😇 '))
