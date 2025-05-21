window.addEventListener('scroll', () => {
  
  const main = document.getElementById('main');
  const logo = document.getElementById('logoferrari');
  const nav = document.querySelector('#a');
  const header = document.querySelector('#header');

  const scrollY = window.scrollY;
  const mainY = main.offsetTop;

  if (scrollY >= mainY) {
    logo.classList.toggle('invert', this.window.scrollY > 850);
    nav.classList.toggle('invert', this.window.scrollY > 850);
    

  } else {
    logo.classList.toggle('invert', this.window.scrollY > 850);
    nav.classList.toggle('invert', this.window.scrollY > 850);
  }
});


/*
window.addEventListener('scroll', function(){
  let header = document.querySelector('#header');
  const logo = document.getElementById("logoferrari");
  const nav = this.document.querySelector("#a");
  //header.classList.toggle('rolagem', window.scrollY > 850);
  logo.classList.toggle('invert', this.window.scrollY > 850);
  nav.classList.toggle('invert', this.window.scrollY > 850);
})
  */


