const express = require('express')
const app = express()

const port = process.env.PORT || 8080

app.use(express.static(__dirname + '/dist/ImranR'))
app.use('/static', express.static(__dirname + '/static'))

app.get('/robots.txt', (req, res) => {
    res.sendFile(__dirname + '/static/robots.txt')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/dist/ImranR/index.html')
})

app.listen(port, () => {
    console.log(`Serving on port ${port}.`)
}).on('error', (err) => {
    console.error(err)
})