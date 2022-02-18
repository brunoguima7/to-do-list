const express = require ("express")
const checklistsRouter = require ("./src/routes/checklists")
require("./config/database")

const app = express()

app.use(express.json()) /*middleware que faz com que arquivos json sejam lidos como json e não como tipo texto*/ 

app.get("/", (req, res) => {
    res.send("<h1>Minha lista de tarefas</h1>")
})

app.get("/json", (req, res) => { /*cria um arquivo no tipo json na url indicada*/
    res.json({task: "Tarefa", done: true})
})

app.use("/checklist", checklistsRouter)

app.listen(3001, () => {
    console.log("Servidor foi iniciado")
})
