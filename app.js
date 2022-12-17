const http = require('http');
const path = require('path');
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT

app.use(bodyParser.urlencoded({extended: false})); app.use(express.static(path.join(__dirname, 'public')));

const server = http.createServer(app);
server.listen(port);

app.get('/', express.static(path.join(__dirname, "/public")));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});
