const express = require ("express")

const router = express.Router()

router.get("/", (req, res) => {
    res.send("<h1>Minha lista de tarefas</h1>")
})

router.get("/json", (req, res) => { /*cria um arquivo no tipo json na url indicada*/
    res.json({task: "Tarefa", done: true})
})

router.post("/", (req, res) => {
    console.log(req.body)
    res.status(200).send(req.body)
})

module.exports = router
