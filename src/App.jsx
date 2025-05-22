import BotaoDescubra from "./components/BotaoDescubra";
import PilotoCard from "./components/PilotoCard";
import "../styles/all.css"; // Pode importar seus estilos normais aqui
import "../styles/header.css"; // Estilos específicos do header

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
            <a href="#">About</a>
            <a href="#">Racing</a>
            <a href="#">Collections</a>
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
        <h2>Conheça nossos pilotos:</h2>
        <PilotoCard nome="Charles Leclerc" imagem="/imagens/chalec01.avif" />
        <PilotoCard nome="Lewis Hamilton" imagem="/imagens/lewham01.avif" />
      </main>
    </>
  );
}
