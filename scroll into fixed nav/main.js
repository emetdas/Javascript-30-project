const home = document.querySelector("#home");
const nav = document.querySelector('nav');
const conntainer = document.querySelector('.container');
const conntainerHeight = conntainer.getBoundingClientRect().height;
const callback = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
  nav.classList.add('sticky');
}
else{
  nav.classList.remove('sticky');
}
};
const homeObserver = new IntersectionObserver(callback, {
  root: null,
  threshold: 0,
  rootMargin: `-${conntainerHeight}px`,
});
homeObserver.observe(home);
