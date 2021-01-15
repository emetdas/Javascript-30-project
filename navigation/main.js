const manue = document.querySelector(".manue-item");
const nav_item = document.querySelector(".nav-item");
manue.addEventListener("click", function () {
  manue.classList.toggle("active");
  nav_item.classList.toggle("active");
});
