const contanier = document.querySelectorAll('.container');
const img = document.querySelector('.img');
const fead_in = document.querySelectorAll('.fead-in');
const Callback = function(entris,observer){
   entris.forEach(entry =>{
    if (!entry.isIntersecting) {
        return;
      }
      else{
        entry.target.classList.add('apper');
          console.log(entry);
          Observ.unobserve(entry.target);
      }
   });
}
const Observ = new IntersectionObserver(Callback,{
    root:null,
    threshold:0.15,
    rootMargin:'-50px'
});
fead_in.forEach((section)=>{
    Observ.observe(section);
})
