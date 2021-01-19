const btnScroll = document.querySelector(".btn-section-1");
const section = document.querySelector("#section-one");

btnScroll.addEventListener("click", function (e) {
  // old way scrolling old way is supportiong old browser
  const cordinat = section.getBoundingClientRect();
  window.scrollTo({
    left: cordinat.left + window.pageXOffset,
    top: cordinat.top + window.pageYOffset,
    behavior: "smooth",
  });
  // modern way
  // section.scrollIntoView({behavior:'smooth'});
});
// nav item target to scroll
// bad way
// const nav_link = document.querySelectorAll(".nav-link");
// nav_link.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });
// right way
const nav_item = document.querySelector(".nav-item");
nav_item.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
});
