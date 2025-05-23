export default function PilotoCard({ nome, imagem }) {
  return (
    
      <div className="card" style={{ width: "fit-content" }}>
        <img src={imagem} className="card-img-top" alt={nome} />
        <div className="card-body">
          <h5 className="card-title text-center">{nome}</h5>
          <a href="#" className="btn btn-danger d-block">Veja Mais</a>
        </div>
      </div>
  );
}
