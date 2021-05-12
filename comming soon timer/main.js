let year = document.querySelector('.year');
let day = document.querySelector('.day');
let hour = document.querySelector('.hour');
let minute = document.querySelector('.minutes');
let second = document.querySelector('.second');

let currentYear = new Date().getFullYear();
let newYearTime = new Date(`january 01 ${currentYear + 1} 00:00:00`);

function updateCounter() {
  let currentTime = new Date();
  let diff = newYearTime - currentTime;
  let d = Math.floor(diff / 1000 / 60 / 60 / 24);
  let h = Math.floor((diff / 1000 / 60 / 60) % 24);
  let m = Math.floor((diff / 1000 / 60) % 60);
  let s = Math.floor((diff / 1000) % 60);

  year.innerHTML = currentYear + 1;
  day.innerHTML = d;
  hour.innerHTML = h;
  minutes.innerHTML = m;
  second.innerHTML = s;
}
setInterval (updateCounter(),1000);