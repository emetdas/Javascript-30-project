document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);
var iframe = document.querySelector(".responsive-tester");
var smartphones = document.querySelector(".smartphones");
var mobile = document.querySelector(".mobile");
var tablet = document.querySelector(".tablet");
var desktop = document.querySelector(".desktop");
var bigDesktop = document.querySelector(".bigDesktop");
var findbtn = document.querySelector(".findbtn");
var url = document.querySelector(".url").value;
var UrlIframe = iframe.getAttribute("src");
console.log(UrlIframe);
function validateForm(e) {
    e.preventDefault();
    // if (url == "") {
    //     return false;
    // } else {
    //     url = UrlIframe;
    // }
    // url = UrlIframe;
    function url(){
    iframe.src = url;
    }
}

smartphones.addEventListener("click", (e) => {
    iframe.style.width = "300px";
    iframe.style.height = "400px";
});
mobile.addEventListener("click", (e) => {
    iframe.style.width = "600px";
    iframe.style.height = "500px";
});
tablet.addEventListener("click", () => {
    iframe.style.width = "768px";
    iframe.style.height = "550px";
});
desktop.addEventListener("click", () => {
    iframe.style.width = "992px";
    iframe.style.height = "calc(100vh - 4rem)";
});
bigDesktop.addEventListener("click", () => {
    iframe.style.width = "1200px";
    iframe.style.height = "calc(100vh - 4rem)";
});
