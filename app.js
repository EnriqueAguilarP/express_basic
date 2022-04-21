//Importar un objeto express
const express = require('express')

//app de express
const app = express()

//puerto en que vamos a ver nuestra app: 3000
const port = 3000

//path inicial, responderá a localhost:3000
app.get('/', (req, res) => {
    res.send('Bienvenido a tu primer servidor')
})

//respuesta a localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send('Bienvenido NodeJs en LaunchX')
})

//regresar un objeto
//localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorer = {name: 'explorer', msg: 'Hello'}
    res.send(explorer)
})

//QueryParams: recibir parametros por la url
//http://localhost:3000/explorers/enrique
//req.params = {"explorerName": "enrique"}
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})

//Inicializar esta app
app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`)
})