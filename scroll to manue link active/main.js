const sectionAll = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;

  sectionAll.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        const active = document.querySelector('nav a[href*='+ sectionId+']');
        active.classList.add('active');
    }
    else{
        active.classList.remove('active');
    }
  });
});
