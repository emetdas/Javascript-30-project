const btnScroll = document.querySelector('.btn-section-1');
const section = document.querySelector('#section-one');

btnScroll.addEventListener('click', function (e) {
    // old way scrolling old way is supportiong old browser
  const cordinat = section.getBoundingClientRect();
  window.scrollTo({
    left: cordinat.left + window.pageXOffset,
    top: cordinat.top + window.pageYOffset,
    behavior: 'smooth'
  });
  // modern way
    // section.scrollIntoView({behavior:'smooth'});
});
