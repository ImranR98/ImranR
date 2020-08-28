const express = require('express')
const app = express()

const port = process.env.PORT || 8080



// Stores all unique IPs that sent requests recently
let recentRequests = new Set()

// Function to send an HTTP request to a public IP API
const simpleHttpGet = (url) => {
	return new Promise((resolve, reject) => {
		https.get(url, (resp) => {
			let data = ''
			// A chunk of data has been recieved.
			resp.on('data', (chunk) => {
				data += chunk
			})
			// The whole response has been received. Print out the result.
			resp.on('end', () => {
				resolve(data)
			})
		}).on("error", (err) => {
			reject(err)
		})
	})
}

// Add the IP of any requester to the recentRequests Set
app.use((req, res, next) => {
	let reqIP = req.ip
	let ipv4StartIndex = reqIP.lastIndexOf('ffff:')
	if (ipv4StartIndex < 0 || reqIP.endsWith('127.0.0.1')) reqIP = null
	else reqIP = reqIP.substr(ipv4StartIndex + 5)
	recentRequests.add(reqIP)
	next()
})

// Return the current date and time in a readable string
const printNow = () => {
	const doubleDigits = (num) => {
		let numstr = num.toString()
		if (numstr.length == 1) return '0' + numstr
		else return numstr
	}
	const time = new Date()
	return `${time.getFullYear()}-${doubleDigits(time.getMonth() + 1)}-${doubleDigits(time.getDate())}:${doubleDigits(time.getHours())}:${doubleDigits(time.getMinutes())}:${doubleDigits(time.getSeconds())}`
}

// For each IP in the recentRequests set, use simpleHttpGet() to find that IPs location using a public API, then clean the Set
const logRequests = () => {
	recentRequests.forEach(ip => {
		if (ip) {
			simpleHttpGet(`https://tools.keycdn.com/geo.json?host=${ip}`).then(data => {
				data = JSON.parse(data)
				let country = data ? data.data ? data.data.country_name ? data.data.country_name : null : null : null
				if (typeof country == 'string') if (country.trim().length == 0) country = null
				console.log(`${printNow()}: Request from ${ip} ${country ? `in ${country}.` : `.`}`)
			}).catch(err => {
				console.log(`${printNow()}: Request from ${ip}. Could not determine location.`)
			})
		} else {
			console.log(`${printNow()}: Request from localhost.`)
		}
	})
	recentRequests.clear()
}

// Every one second, print out the last one second of IPs.
// This is needed because a single IP sends several requests within a few ms of each other.
// No point repeating the same IP several times, so collecting them into a set every second solves this.
setInterval(logRequests, 1000)



app.use(express.static(__dirname + '/dist/resume'))

app.get('*', (req, res) => {
	res.sendFile(__dirname + '/dist/resume/index.html')
})

app.listen(port, () => {
	console.log(`Serving ImranR-Resume on port ${port}.`)
})