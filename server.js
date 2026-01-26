const express = require("express");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

var app = express();

const conf = dotenv.config();

portFutott = conf.parsed.PORT;
port = conf.parsed.PORT;
console.log(port);

app.use(express.static("public"));
app.use(express.static("public/js"));
app.use(express.static("public/css"));
app.use(express.static("public/img"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.redirect("https://the-good-old-developer.vercel.app/");
// });
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
//NOTE: ez a régi átirányításhoz kellett, de még nem töröltem el
app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});

// Nodemailer transporter létrehozása
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // Gmail cím
    pass: process.env.EMAIL_PASS, // Gmail jelszó vagy app-specifikus jelszó
  },
});

// E-mail küldési endpoint
app.post("/send-email", async (req, res) => {
  const { name, phone, email, message } = req.body;
  const sendToEmail = "assistant@thegoodolddeveloper.com";
  // const sendToEmail = "thegoodolddeveloper@gmail.com";
  console.log("name: ", name);
  console.log("phone: ", phone);
  console.log("email: ", email);
  console.log("message: ", message);

  try {
    const { email, name } = req.body;
    const info = await transporter.sendMail({
      from: '" 👑 TGOD email sender 👑" tgodemailserver@gmail.com', // sender address
      to: sendToEmail, // list of receivers
      subject: "New Contact", // Subject line
      //text: "Hello World and NodeMailer! 😁", // plain text body
      html: `
      <h1>Name: ${name}</h1>
      <h2>Mobil number: ${phone} </h2>
      <h2>E-mail address: ${email} </h2>
      <h3>message: ${message}</h3>
      `, // html body
    });

    res.json({ succes: true });
  } catch (error) {
    console.log(error);
    res.json({ err: error.message });
  }

  // E-mail opciók beállítása
  /*
  let mailOptions = {
    from: '"Contact Form" <your-email@gmail.com>',
    to: "photovegh@gmail.com",
    subject: "Új kapcsolatfelvétel",
    text: `Név: ${name}\nTelefonszám: ${phone}\nE-mail: ${email}\nÜzenet: ${message}`,
    html: `<p><strong>Név:</strong> ${name}</p>
               <p><strong>Telefonszám:</strong> ${phone}</p>
               <p><strong>E-mail:</strong> ${email}</p>
               <p><strong>Üzenet:</strong> ${message}</p>`,
  };

  try {
    // E-mail küldése
    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    res.status(200).send("E-mail sikeresen elküldve");
  } catch (error) {
    console.error("Hiba történt az e-mail küldése során:", error);
    res.status(500).send("Hiba történt az e-mail küldése során");
  }
  */
});

app.listen(port, function () {
  console.log(
    "Az expressz elindult a http://localhost:" +
      port +
      " helyen; a Ctrl-C megnyomásával zárja be a szervert."
  );
});
