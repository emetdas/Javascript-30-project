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
    iframe.style.height = "380px";
});
mobile.addEventListener("click", (e) => {
    iframe.style.width = "640px";
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
    var RegExp =/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;

    var match = input.match(RegExp);
    console.log(match);
    if (match === null) {
        window.frames[0].location = "https://e-learn-01.netlify.app";
        return false;
    }
    if (match ||input !== null || match !== null) {
        window.frames[0].location = input;
    }

});
// Test-any-website-end






