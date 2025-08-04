// ScrollEffect.jsx
import { useEffect } from "react";

export default function ScrollEffect() {
  useEffect(() => {
    const handleScroll = () => {
      const cardlec = document.getElementsByClassName('cardlec');
      const conheca = document.getElementsByClassName('conheca');
      const main = document.getElementById('main');
      const mainY = main?.offsetTop || 0;
      const scrollY = window.scrollY;

      if (scrollY >= mainY) {
        for (let i = 0; i < cardlec.length; i++) {
          cardlec[i].classList.add('fadecard');
        }
        for (let i = 0; i < conheca.length; i++) {
          conheca[i].classList.add('fadecard');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null; // Não renderiza nada
}
