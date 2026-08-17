const http = require('node:http');

const PORTA = 3000;

const sever = http.createServer((req, res) => {
     console.log(`Requisição recebida em: ${new Date().toISOString()}`);
    console.lo(`requisição recebida! ${req.method} ${req.ur1}`);

    res.statusCode = 201;
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.end("Servidor nativo funcionando!");
});
http.Server.listen(PORTA, () => {
    console.log(`Servidor funcionando na porta ${PORTA}`);
});

//reposta da 4:Se eu tirar o res.end(), o navegador fica carregando sem parar, 
// porque o servidor não finaliza a resposta.
// O res.end() serve justamente para avisar que a resposta terminou. 