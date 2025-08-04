/*
window.addEventListener('scroll', () => {
  
  const main = document.getElementById('main');
  const mainh = main.offsetHeight;
  const logo = document.getElementById('logoferrari');
  const nav = document.querySelector('#a');
  const header = document.querySelector('#header');

  const scrollY = window.scrollY;
  const mainY = main.offsetTop;

  if (scrollY >= mainY) {
    logo.classList.toggle('invert', this.window.scrollY > 450);
    nav.classList.toggle('invert', this.window.scrollY > 450);
    

  } else {
    logo.classList.toggle('invert', this.window.scrollY > 450);
    nav.classList.toggle('invert', this.window.scrollY > 450);
  }
});
*/


window.addEventListener('scroll', function(){
  const main = document.getElementById('main');
  const mainh = main.offsetHeight;
  const logo = document.getElementById('logoferrari');
  const nav = document.querySelector('#a');

  const scrollY = window.scrollY;
  const mainY = main.offsetTop;

  if (scrollY >= mainY) {
    logo.classList.toggle('invert', scrollY > 450);
    nav.classList.toggle('invert', scrollY > 450);
  } else {
    logo.classList.toggle('invert', scrollY > 450);
    nav.classList.toggle('invert', scrollY > 450);
  }
});


