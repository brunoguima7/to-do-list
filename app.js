const express = require ('express')

const app = express()

app.get("/", (req, res) => {
    res.send("<h1>Minha lista de tarefas</h1>")
})

app.get("/json", (req, res) => {
    res.json({task: "Tarefa", done: true})
})

app.listen(3001, () => {
    console.log("Servidor foi iniciado")
})