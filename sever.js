import http from 'node:http'
import { URL } from 'node:url'

const porta = 3000

const tarefas = [
    { id: 1, titulo: "Estudar" },
    { id: 2, titulo: "Fazer trabalho de Banco de Dados" },
    { id: 3, titulo: "fazer seminario de portugues" },
    { id: 4, titulo: "Fazer atividade de fisca" }
]

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json; charset=utf-8')

    if (req.method == "GET" && req.url.startsWith("/tarefas/busca")) {
        const url = new URL(req.url, `http://localhost:${porta}`)
        const titulo = url.searchParams.get("titulo")

        const resultado = tarefas.filter(tarefa =>
            tarefa.titulo.toLowerCase().includes(titulo.toLowerCase())
        )

        return res.end(JSON.stringify(resultado))
    }

    res.end(JSON.stringify({data: "Página Inicial"}))
})

server.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`)
})