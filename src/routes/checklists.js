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
    res.send(req.body)
})

router.get("/:id", (req, res) => {
    console.log(req.params.id)
    res.send(`ID: ${req.params.id}`)
})

router.put("/:id", (req, res) => {
    console.log(req.params.id)
    res.send(`PUT: ${req.params.id}`)
})

router.delete("/:id", (req, res) => {
    console.log(req.params.id)
    res.send(`DELETE: ${req.params.id}`)
})

module.exports = router
