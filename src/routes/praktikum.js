const express = require('express')
const app = express()

app.use(express.json())

const controller = require(`../controllers/praktikumController`)

app.get("/profil/:name/:age/:kelas", controller.profil)
app.post("/bujurSangkar", controller.bujurSangkar)

module.exports = app