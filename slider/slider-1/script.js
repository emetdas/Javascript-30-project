let slider = document.querySelector('.slider');
let slide = [...document.getElementsByClassName('slide')];
// let slide = document.querySelectorAll('.slide');
let btn_left = document.querySelector('.btn-left');
let btn_right = document.querySelector('.btn-right');

let first_clone = slider.insertAdjacentHTML(
  'afterbegin',
  slide[slide.length - 1].outerHTML
);
let last_clone = slider.insertAdjacentHTML('beforeend', slide[0].outerHTML);

let index = 1;
let slider_length = slide.length + 2;
console.log(slider_length);
slider.style.width = `${(slide.length + 2) * 100}vw`;
let slider_width = slide[0].clientWidth;
slider.style.transform = `translateX(${-slider_width}px)`;

console.log(slide);
btn_right.addEventListener('click', () => {
  if (index === slider_length - 1) {
    setTimeout(() => {
      index = 1;
      slider.style.transition = 'none';
      slider.style.transform = `translateX(${-slider_width}px)`;
    }, 300);
  } else {
    index++;
    slider.style.transform = `translateX(${-slider_width * index}px)`;
    slider.style.transition = 'transform 0.5s ease-in-out';
  }
});

btn_left.addEventListener('click', () => {
  if (index === 0) {
    setTimeout(() => {
      index = slider_length - 2;
      slider.style.transition = 'none';
      slider.style.transform = `translateX(${-slider_width * index}px)`;
    }, 300);
  } else {
    index--;
    slider.style.transform = `translateX(${-slider_width * index}px)`;
    slider.style.transition = 'transform 0.5s ease-in-out';
  }
});
// slider.addEventListener('transitionend', () => {
//   if (index === slider_length - 1) {
//     setTimeout(() => {
//       index = 1;
//       slider.style.transition = 'none';
//       slider.style.transform = `translateX(${-slider_width}px)`;
//     }, 300);
//   }
//   if (index === 0) {
//     setTimeout(() => {
//       index = slider_length - 2;
//       slider.style.transition = 'none';
//       slider.style.transform = `translateX(${-slider_width * index}px)`;
//     }, 300);
//   }
// });
