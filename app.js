const http = require('http');

const server = http.createServer((req, res) => {
   
   res.statusCode = 200;
   res.setHeader('content-Type', 'text/plain');
   res.end('Hello NodeJS');
});

server.listen(3000,'localhost', () => {
    console.log('Server running');
});