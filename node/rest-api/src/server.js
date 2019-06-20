const port = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const data = require('./data')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/data', (req, res, next) => {
    res.send(data.getAllData())
})

app.get('/data/:id', (req, res) => {
    res.send(data.getData(req.params.id))
})

app.post('/data', (req, res, next) =>{
    const info = data.saveInfo({
        name: req.body.name,
        age: req.body.age
    })
    res.send(info)//JSON
})

app.put('/data/:id', (req, res, next) =>{
    const info = data.saveInfo({
        id: req.params.id,
        name: req.body.name,
        age: req.body.age
    })
    res.send(info)//JSON
})

app.delete('/data/:id', (req, res) => {
    const info = data.deleteData(req.params.id)
    res.send(info)
})

app.listen(port, () => {
    console.log('Listen in ' + port)
})