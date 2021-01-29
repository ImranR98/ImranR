const express = require('express')
const app = express()

const port = process.env.PORT || 8080

app.use(express.static(__dirname + '/build'))

app.listen(port, () => {
    console.log(`Serving on port ${port}.`)
}).on('error', (err) => {
    console.error(err)
})