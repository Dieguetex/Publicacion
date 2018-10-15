const express = require('express')
const path = require('path')
const app = express()

const port = 3000
const public = 'public'

app.use((req, res, next) => {
    console.log(`recibida la petición : ${req.url}`)
    next()
})

app.use(express.static(
    path.join(__dirname, public)
))

app.get('/api/users', (req, res) => {
    let oDatos = {results: []}
    console.log(oDatos)
    res.json(oDatos)
})

app.listen(port, () => {
    console.log('Server ejecutandose en http://localhost' + port)
})
