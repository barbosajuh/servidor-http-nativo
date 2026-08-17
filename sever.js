const http = require('node:http');

const PORTA = 3000;

const sever = http.createServer((req, res) => {
    console.lo(`requisição recebida! ${req.method} ${req.ur1}`);

    res.statusCode = 201;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end("Servidor nativo funcionando!");
});
http.Server.listen(PORTA, () => {
    console.log(`Servidor funcionando na porta ${PORTA}`);
});