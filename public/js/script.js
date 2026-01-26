// localStorage
let lang = "";
if (localStorage.getItem("language")) {
  lang = localStorage.getItem("language");
  //console.log("lang: 👍 ", lang);
} else {
  localStorage.setItem("language", "EN");
  lang = localStorage.getItem("language");
  //console.log("lang: 😊 ", lang);
}
const flagHU = `<img src="hu.png " alt="hu" width="60px" height="40px" />`;
const flagEN = `<img src="gb.png " alt="hu" width="60px" height="40px" />`;
/* const flagHU = `<img src="./public/img/hu.png " alt="hu" width="30px" height="20px" />`;
const flagEN = `<img src="./public/img/gb.png " alt="hu" width="30px" height="20px" />`; */
document.getElementById("langIcon").innerHTML = lang == "HU" ? flagEN : flagHU;

let cTittle = [];
let cTool = [];
let cIndex = [];
let cImage = [];

HTMLcontentCode();
render();

document.getElementById("app-10").addEventListener("click", () => {
  window.location.href = "https://chat-my-gpt-rho.vercel.app/";
});
document.getElementById("app-0").addEventListener("click", () => {
  window.location.href = "https://portfolio.thegoodolddeveloper.cloud/";
  //window.location.href = "https://thegoodolddeveloper.com/snippet";
});
document.getElementById("app-1").addEventListener("click", () => {
  window.location.href = "https://index.hu";
  //window.location.href = "https://snippets-psi-cyan.vercel.app/";
});
document.getElementById("app-2").addEventListener("click", () => {
  window.location.href = "http://156.67.29.41:7766/";
});
document.getElementById("app-3").addEventListener("click", () => {
  window.location.href = "http://156.67.29.41:3333/";
});
document.getElementById("app-4").addEventListener("click", () => {
  window.location.href = "http://156.67.29.41:9876/";
});
document.getElementById("app-5").addEventListener("click", () => {
  window.location.href = "https://foglalom.eu/";
});
document.getElementById("app-6").addEventListener("click", () => {
  window.location.href = "https://foglalom.eu/";
});
document.getElementById("app-7").addEventListener("click", () => {
  window.location.href = "https://snippets-psi-cyan.vercel.app/";
});
document.getElementById("app-8").addEventListener("click", () => {
  window.location.href = "https://photovegh.synology.me/";
});
document.getElementById("app-9").addEventListener("click", () => {
  window.location.href = "https://erikahorvath.com/";
});

function HTMLcontentCode() {
  //console.log("lang 😍😍😍😍😍", lang);
  //console.log("contentArrays 😈", cTittle, cTool, cImage, cIndex);

  /* for (let i = 0; i < cIndex.length; i++) {
    document
      .getElementById("classContainer")
      .setAttribute("class", `container-${cIndex[i]}`);
    appendix = "app-" + cIndex[i];
    console.log("APPINDEX:", appendix);
    document.getElementById("appIndex").value = appendix;
    document.getElementById("tittle").innerHTML = cTittle[i];
    document.getElementById("tool").innerHTML = cTool[i];
    document.getElementById("image").innerHTML = cImage[i];
  } */
  for (index of cIndex) {
    //console.log("index: ", index);
    document.getElementById(`tittle-${index}`).innerHTML = cTittle[index];
    document.getElementById(`tool-${index}`).innerHTML = cTool[index];
    document.getElementById(`image-${index}`).innerHTML = cImage[index];
  }
  /* let htmlContent = "";
  for (index of cIndex) {
    htmlContent += `<div class="container container-${index}">
        <button class="mainBTN" id="app-${index}">
          ${cTittle[index]}<br /><span
            style="font-size: 1.5rem; color: bisque"
            >${cTool[index]}
          </span>
        </button>
        <p class="demo">${cImage[index]}<br /></p>
        <div class="copyRight" style="font-size: 1.5rem; color: bisque">
          ©photovegh
        </div>
      </div>`;
  } */
  //console.log("htmlContent: ", htmlContent);
  /* return (document.getElementById("HTMLcode").innerHTML = htmlContent); */
}

function contentsTittle() {
  if (lang == "EN") {
    return [
      "Chatbots that Speak Your Customers' Language...",
      "This is a 'pub counter-terminal' for touchscreen...",
      "This is the admin of the 'pub counter-terminal'...",
      "This is the inventory taker at the 'pub counter-terminal'...",
      "This is a REST API...",
      "This is a BLOG...",
      "This is an Address Book...",
      "This is a Gym appointment booking...",
      "This is a Web Shop...",
      "This is wwwebPage...",
      "This is a private ChatGPT assistant...",
    ];
  } else {
    return [
      "Chatbotok, amik a vásárlóid nyelvén szólnak...",
      "Ez egy pultos terminál touchscreen-re...",
      "Ez a pultos terminál ADMIN-ja...",
      "Ez a pultos terminál leltár appja...",
      "Ez egy REST API...",
      "Ez egy személyes BLOG...",
      "Ez egy Address Book...",
      "Ez egy Gym időpontfoglaló...",
      "Ez egy Web Shop...",
      "Ez egy wwwebPage...",
      "Ez egy privát ChatGPT asszisztens...",
    ];
  }
}
function contentsTool() {
  return [
    // snippett"(Next.js & Tailwind & SQLite3)",
    "(OpenAI, ChatBot)",
    "(login code 0, 11, 2 or 3)",
    ".",
    ".",
    "(with MongoDB and TOKEN)",
    "(with MySQL)",
    "(with REACT & SQLite3)",
    "(with REACT & SQLite3 & DOCKER)",
    "(with REACT pay by Stripe)",
    "(with classic HTML)",
    "(Implement private ChatGPT with Next.js MongoDB Tailwind Auth0 deployed on Vercel)",
  ];
}
function imageTittle() {
  return [
    "Blackberry...",
    "Grimming...",
    "Ratrak...",
    "Sender butterfly...",
    "Duck and junior ducks...",
    "Cloud ocean at sunset...",
    "To be, or not to be, that is the question...",
    "The final purpose...",
    "Unusual exhibition in Paris (2006)...",
    "A stream and ice (2017)...",
    "Wild strawberries...",
  ];
}
function contentsIndex() {
  return [10, 9, 8, 0, 7, 6, 1, 2, 3, 4, 5];
}

$(".mainBTN").mouseenter(function () {
  $(".mainBTN").css("color", "red");
  $(".mainBTN").css("cursor", "pointer");
  $(".mainBTN").css("font-size", "3rem");
});
$(".mainBTN").mouseleave(function () {
  $(".mainBTN").css("color", "white");
  $(".mainBTN").css("font-size", "2.5rem");
});

const languageSelect = () => {
  /* lang ? (lang = "HU") : (lang = "EN"); */
  lang = lang === "HU" ? "EN" : "HU";
  localStorage.setItem("language", lang);
  //console.log("lang: 👍 & klikkeltem!!!", lang);
  document.getElementById("langIcon").innerHTML =
    lang == "HU" ? flagEN : flagHU;
  render();
};

function render() {
  cTittle = contentsTittle();
  cTool = contentsTool();
  cIndex = contentsIndex();
  cImage = imageTittle();

  HTMLcontentCode();
  //window.location.reload();
}

function test() {
  console.log("test");
}

function sendEmail() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  fetch("/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, phone, email, message }),
  })
    .then((response) => response.text())
    .then((data) => {
      // alert(data); // Sikeres küldés esetén megjelenít egy üzenetet
      // Modal bezárása
      const modal = bootstrap.Modal.getInstance(
        document.getElementById("contactModal"),
      );
      modal.hide();
      // Form resetelése
      document.getElementById("contactForm").reset();
    })
    .catch((error) => {
      console.error("Error:", error);
      // alert("Hiba történt az e-mail küldése során");
    });
}
