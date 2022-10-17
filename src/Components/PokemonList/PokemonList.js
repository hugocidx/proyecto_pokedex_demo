import Card from "../Cards/Card";

const PokemonList = ({ listaProperty }) => {
  return listaProperty !== undefined && listaProperty.length > 0 ? (
    <div className="content-cards">
      {listaProperty.map((pokemonDetail, index) => (
        <Card pokemon={pokemonDetail} key={index} />
      ))}
    </div>
  ) : (
    <h1>No hay informacion para mostrar</h1>
  );
};
export default PokemonList;
