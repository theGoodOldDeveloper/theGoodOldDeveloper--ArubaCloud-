document.getElementById('app-1').addEventListener('click', () => {
    window.location.href = 'http://thegoodolddeveloper.website:7777/'
})
document.getElementById('app-2').addEventListener('click', () => {
    window.location.href = 'http://thegoodolddeveloper.website:7766/'
})
document.getElementById('app-3').addEventListener('click', () => {
    window.location.href = 'http://thegoodolddeveloper.website:3333/'
})
document.getElementById('app-4').addEventListener('click', () => {
    window.location.href = 'http://thegoodolddeveloper.website:9876/'
})
document.getElementById('app-5').addEventListener('click', () => {
    window.location.href = 'http://thegoodolddeveloper.website:9999/'
})


$(".mainBTN").mouseenter(function(){
  $(".mainBTN").css("color", "red");
  $(".mainBTN").css("cursor", "pointer");
  $(".mainBTN").css("font-size", "3rem");
});
$(".mainBTN").mouseleave(function(){
  $(".mainBTN").css("color", "white");
  $(".mainBTN").css("font-size", "2.5rem");
});

