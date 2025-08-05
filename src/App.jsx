import BotaoDescubra from "./components/BotaoDescubra";
import PilotoCard from "./components/PilotoCard";
import TextoAnimado from "./components/TextoAnimado"
import "./styles/all.css"; //  Seus estilos normais aqui
import "./styles/header.css"; // Estilos específicos do header
import "./styles/main.css"; // Estilos específicos da seção MAIN
import "./styles/TextoAnimado.css"; // Estilos específicos do TextoAnimado
import './scripts/header.js'; // Importando o script header.js
import './scripts/card.js'; // Importando o script card.js
import './styles/custom.scss'; // Importando o SCSS personalizado
//import ScrollEffect from "./components/ScrollCard.jsx";



export default function App() {
  return (
    <>
      <div className="container" id="container">
        <video autoPlay muted loop id="vidfundo">
          <source src="/videos/ferrari.mp4" type="video/mp4" />
        </video>

        <header id="header">
          <img id="logoferrari" src="/imagens/whitehorse.png" width="70" height="85" />
          <nav className="navbar" id="a">
            <a href="#">Home</a>
            <a href="#">Racing</a>
            <a href="#">Collections</a>
            <a href="#">About</a>
          </nav>
        </header>

        <div className="potencia">
          <h2>
            Potência e elegância <br />
            <small style={{ fontWeight: "bolder" }}>SF-25</small>
          </h2>
          <BotaoDescubra />
        </div>
      </div>

      <main id="main">
        <h2 className="conheca">Conheça nossos pilotos:</h2>
          <div className="leclerc">
            <div className="cardlec">
              <PilotoCard nome="Charles Leclerc" imagem="/imagens/chalec01.avif"/>
            </div>
                    <div className="biolec">
                      <div className="textlec">
                        <TextoAnimado text="Charles Leclerc, nascido em 1997 em Monte Carlo, é um piloto monegasco de Fórmula 1. Campeão da Fórmula 2 em  2017, estreou na F1 em 2018 pela Sauber e desde 2019 corre pela Ferrari, onde é destaque pela velocidade e talento." />
                      </div>
                    </div>
          </div>
      </main>
    </>
  );
}
