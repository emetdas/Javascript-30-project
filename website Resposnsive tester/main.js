// document.addEventListener("contextmenu", function(e){
//     e.preventDefault();
// }, false);
var iframe = document.querySelector(".responsive-tester");
var smartphones = document.querySelector(".smartphones");
var mobile = document.querySelector(".mobile");
var tablet = document.querySelector(".tablet");
var desktop = document.querySelector(".desktop");
var bigDesktop = document.querySelector(".bigDesktop");

// device_responsive_sizer-tester-start
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
// device_responsive_sizer-tester-end
// Test-any-website-start
let form = document.querySelector('.form-responsive-tester');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let input = document.querySelector('.url').value;
    window.frames[0].location = input;
});
// Test-any-website-end






