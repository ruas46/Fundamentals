const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const hello = require('./middleware')

//BodyParser
app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//Middleware used in all requests
app.use((req, res, next) => {
    console.log("Before, print this!")
    next()
})

//Middleware used with external file
app.use(hello("Jon"))

//app.get, app.put, app.post, app.delete, app.all, app.use
app.get('/', (req, res, next) => {
    
    res.json({
        data: [
            {name: "jon", age: "33"},
            {name: "jon2", age: "35"}
        ],
        count: 2
    })

    //res.send('ok')

    //next()
})

//Get ID with params url (/docs/3)
app.get('/docs/:id', (req, res) => {
    res.send(`Docs Id: ${req.params.id}`)
})

//Get ID by query (/docs2?id=4)
app.get('/docs2', (req, res) => {
    res.send(`Docs2 Id: ${req.query.id}`)
})

//Post without bodyparser
app.post('/docs3', (req, res) => {
    let body = ''
    req.on ('data', function(p) {
        body += p
    })

    req.on('end', function() {
        res.send(body)
    })

    //With BodyParser can use just
    //res.send(req.body)
})

app.listen(3000, () => console.log("Backend Started"))

