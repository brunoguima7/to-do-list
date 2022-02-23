const express = require ("express")
const checklistsRouter = require ("./src/routes/checklists")
const rootRouter = require ("./src/routes/index")
const path = require("path")
require("./config/database")

const app = express()
app.use(express.json()) /*middleware que faz com que arquivos json sejam lidos como json e não como tipo texto*/ 

app.use(express.static(path.join(__dirname, "public")))

app.set("views", path.join(__dirname, "src/views"))
app.set("view engine", "ejs")

app.use("/", rootRouter)
app.use("/checklist", checklistsRouter)

app.listen(3001, () => {
    console.log("Servidor foi iniciado")
})
