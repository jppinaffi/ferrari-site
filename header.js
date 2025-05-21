





window.addEventListener('scroll', function(){
  let header = document.querySelector('#header');
  const logo = document.getElementById("logoferrari");
  const nav = this.document.querySelector("#a");
  //header.classList.toggle('rolagem', window.scrollY > 850);
  logo.classList.toggle('invert', this.window.scrollY > 850);
  nav.classList.toggle('invert', this.window.scrollY > 850);
})


