const theme_check_box = document.querySelector("#theme");
const theme = localStorage.getItem("theme");
if (theme) {
    document.documentElement.setAttribute("dark-theme","dark");
    if (theme === "dark") {
        theme_check_box.checked = true;
    }
}
theme_check_box.addEventListener("change",function(){
    if (this.checked) {
        document.documentElement.setAttribute("dark-theme","dark");
        localStorage.setItem("theme","dark");
    }
    else{
        document.documentElement.removeAttribute("dark-theme");
        localStorage.removeItem("theme");
    }
});