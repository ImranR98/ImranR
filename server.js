const express = require('express')
const app = express()

const port = process.env.PORT || 8080

app.use(express.static(__dirname + '/dist/resume'))
app.get('*', (req, res) => {
	res.sendFile(__dirname + '/dist/resume/index.html')
})

app.listen(port, () => {
	console.log(`Serving ImranR-Resume on port ${port}.`)
})