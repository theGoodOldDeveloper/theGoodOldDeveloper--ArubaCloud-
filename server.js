const express = require("express");
const dotenv = require("dotenv");
var app = express();

const conf = dotenv.config();

portFutott = conf.parsed.PORT;
port = conf.parsed.PORT;
console.log(port);

app.use(express.static("public"));
app.use(express.static("public/js"));
app.use(express.static("public/css"));
app.use(express.static("public/img"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/contact.html");
});

app.listen(port, function () {
    console.log(
        "Az expressz elindult a http: // localhost:" +
        port +
        " helyen; a Ctrl-C megnyomásával zárja be a szervert."
    );
});
