window.addEventListener('scroll',() => {
    const cardlec = document.querySelector('.card');
    const conheca = document.getElementsByClassName('conheca');
    if(this.window.scrollY > 700){
        cardlec.classList.add('fadecard');
        for (let i = 0; i < conheca.length; i++) {
            conheca[i].classList.add('fadecard');
            conheca[i].style.visibility = 'visible'; // Torna o texto visível
        }
    }
});