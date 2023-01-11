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
    /* res.send(
        "<h1>Hello World! 😋 </h1><h2 style = 'color: blue'>Aruba cloud</h2>" +
            "<p>Ha a port 8888 akkor js-ben kapta meg, ha 7777 akkor .env : </p><h3>" +
            portFutott +
            "</h3><h1 style = 'color: red'> Egyenlőre foreverrel !</h1><p style = 'color: green'>Lássuk a medvét ..."
    ); */
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, function () {
    console.log(
        "Az expressz elindult a http: // localhost:" +
            port +
            " helyen; a Ctrl-C megnyomásával zárja be a szervert."
    );
});
