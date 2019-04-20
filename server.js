//Add required Modules
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let path = require('path');

let clientDir = __dirname + '/client';

//Set folder where compiled client App is located
app.use(express.static(clientDir + '/dist/client'));

//Enables parsing of request bodies
app.use(bodyParser.json({ extended: true }));

//Enables client to access the server from localhost, only needed in local development
let allowCrossDomain = function (req, res, next) {
    let valid = false;
    if (req.header('origin')) {
        if (req.header('origin').indexOf('localhost') !== -1) {
            valid = true;
        }
    }
    if (valid) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Access-Control-Allow-Credentials', 'true');
    }
    next();
}
app.use(allowCrossDomain);

//API Routes
//======================================


//======================================

//All other routes are handled by the Angular App which is served here
app.get('*', (req, res) => {
    res.sendFile(path.join(clientDir + '/dist/client/index.html'));
});

//Set Port
let HTTP_PORT = process.env.PORT || 8080;

//Start Server
let server = app.listen(HTTP_PORT, function () {
    console.log('app listening on: ' + HTTP_PORT)
});

let io = require('socket.io').listen(server);

//Socket IO
//======================================
io.on('connection', (socket) => {
    socket.on('new-message', (message, user) => {
        io.emit('new-message', message, user);
    });
});