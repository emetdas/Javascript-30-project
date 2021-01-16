const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;

document.querySelector(".btn").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  document.body.style.backgroundColor = randomColor();
  // event progregation stop this is not good
  //   e.stopPropagation();
});
