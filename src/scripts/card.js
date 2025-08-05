/*

window.addEventListener('scroll', () => {
    const cardlec = document.getElementsByClassName('cardlec');
    const conheca = document.getElementsByClassName('conheca');
    const main = document.getElementById('main');
    const mainY = main.offsetTop;
    const scrollY = window.scrollY;

    if (scrollY >= mainY) {
        for (let i = 0; i < cardlec.length; i++) {
            cardlec[i].classList.add('fadecard');
        }
        for (let i = 0; i < conheca.length; i++) {
            conheca[i].classList.add('fadecard');
        }
    }
});

*/

window.addEventListener('scroll', () => {
    const cardlec = document.getElementsByClassName('cardlec');
    const conheca = document.getElementsByClassName('conheca');
    const main = document.getElementById('main');
    const rect = main.getBoundingClientRect();

    if (rect.top <= window.innerHeight) {
        for (let i = 0; i < cardlec.length; i++) {
            cardlec[i].classList.add('fadecard');
        }
        for (let i = 0; i < conheca.length; i++) {
            conheca[i].classList.add('fadecard');
        }
    }
});

