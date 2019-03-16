//Add required Modules
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

var dataService = require("./data-service");

//Set folder where compiled client App is located
app.use(express.static("client/dist/client"));

//Enables parsing of request bodies
app.use(bodyParser.json({ extended: true }));

//Enables client to access the server from localhost, only needed in local development
var allowCrossDomain = function (req, res, next) {
    var valid = false;
    if (req.header('origin')) {
        if (req.header('origin').indexOf("localhost") !== -1) {
            valid = true;
        }
    }
    if (valid) {
        res.header('Access-Control-Allow-Origin', "*");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
    }
    next();
}
app.use(allowCrossDomain);

//Routes for API
//======================================

app.get("/getExperience", (req, res) => {
    dataService.loadCareer('./data/experience.json').then((experience) => {
        res.status(200).send(experience);
    }).catch((err) => {
        res.status(500).send(err);
    })
})

app.get("/getEducation", (req, res) => {
    dataService.loadCareer('./data/education.json').then((education) => {
        res.status(200).send(education);
    }).catch((err) => {
        res.status(500).send(err);
    })
})

app.get("/getSkills", (req, res) => {
    dataService.loadSkills('./data/skills.json').then((skills) => {
        res.status(200).send(skills);
    }).catch((err) => {
        res.status(500).send(err);
    })
})

app.get("/getContact", (req, res) => {
    dataService.loadContact('./data/contact.json').then((contact) => {
        res.status(200).send(contact);
    }).catch((err) => {
        res.status(500).send(err);
    })
})

//======================================

//All other routes are handled by the Angular App which is served here
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/AngularClient/dist/client/index.html"));
});

//Set Port
var HTTP_PORT = process.env.PORT || 8080;

//Start Server
app.listen(HTTP_PORT, function () {
    console.log("app listening on: " + HTTP_PORT)
});