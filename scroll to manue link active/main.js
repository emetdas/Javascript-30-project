const sectionAll = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;

  sectionAll.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector('nav a[href*='+ sectionId+']').classList.add('active');
    }
    else{
        document.querySelector('nav a[href*='+ sectionId+']').classList.remove('active');
    }
  });
});
