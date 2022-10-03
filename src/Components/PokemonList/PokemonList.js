import React, { useEffect, useState } from "react";
import "./PokemonList.scss";
// import InputPokemon from '../Input/Input.js'
import { getListPokemon, getDetailPokemon } from "../../Api/Pokemon";

const PokemonList = ({}) => {
  //arreglo que devuelve pokemon
  const [ListPokemonDetail, setPokemonDetail] = useState([]);
  const [ListNext, setListNext] = useState(null);
  const [ListPreview, setListPreview] = useState(null);
  //variable de estado que guarda los detalles del pokemon
  const getPokemonData = async (url) => {
    setPokemonDetail(null);
    setPokemonDetail((ListPokemonDetail.length = 0));
    const pokemons = await getListPokemon(url);
    setListNext(pokemons.next);
    setListPreview(pokemons.previous);
    //crear lista vacia,recorrer lista de pokemon,traer getPokemonDetail, resultado agregar a lista inicial
    const ListaAuxiliarPokemonDetail = [];
    pokemons.results.map(async (pokemon) => {
      const pokemonDetail = await getPokemonDetail(pokemon.url);
      setPokemonDetail((ListPokemonDetail) =>
        ListPokemonDetail.concat(pokemonDetail)
      );
      // ListPokemonDetail.push(pokemonDetail)
    });
    setPokemonDetail(ListPokemonDetail.concat(ListaAuxiliarPokemonDetail));
    // setPokemonDetail(ListaAuxiliarPokemonDetail)
  };
  useEffect(() => {
    getPokemonData();
  }, []);
  //ejemplo de funcion asyncrona
  const getPokemonDetail = async (url) => {
    const pokemon = await getDetailPokemon(url);
    console.log(pokemon);
    return pokemon;
  };
  //buscar pokemon por nombre usando react hooks forms
  const getPokemon = async (name) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const pokemonDetail = await getPokemonDetail(url);
    console.log("pokemon", pokemonDetail);
    setPokemonDetail((ListPokemonDetail.length = 0));
    setPokemonDetail(ListPokemonDetail.concat(pokemonDetail));
  };
  return (
    <div className="App">
      {/* llamado a input desde componente */}
      {/* <div className="demo-flex-spacer"></div>
      <div className="webflow-style-input">
        <input className="submit" placeholder="ingresa pokemon"></input>
        <button onClick={() => getPokemon("mewtwo")}>
          {" "}
          <i className="fas fa-angle-double-right"></i>
        </button>
      </div> */}

      <div className="selector">
        {/* listado de pokemon */}
        {ListPreview != null ? (
          <button
            className="ButtonPreview"
            onClick={() => getPokemonData(ListPreview)}
          >
            Anterior{" "}
          </button>
        ) : (
          <></>
        )}
        {ListNext != null ? (
          <button
            className="ButtonNext"
            onClick={() => getPokemonData(ListNext)}
          >
            Siguiente{" "}
          </button>
        ) : (
          <></>
        )}
      </div>
      <div>
        {ListPokemonDetail.length > 0 ? (
          ListPokemonDetail.lenght
        ) : (
          <div className="o-pokeball c-loader u-bounce"></div>
        )}{" "}
      </div>
      <div className="content-cards">
        {ListPokemonDetail.length > 0 ? (
          ListPokemonDetail.map((pokemonDetail, index) => {
            return (
              <div key={index}>
                <div className="cards">
                  <figure
                    className="card card--normal"
                    src={pokemonDetail.types[0].type.name}
                  >
                    <div className="card__image-container">
                      <img
                        className="imgPokemon"
                        src={
                          pokemonDetail.sprites.other.dream_world.front_default
                        }
                        alt="imagen de pokemon"
                      />
                    </div>
                    <figcaption className="card__caption">
                      {pokemonDetail != null ? (
                        <div className="detail">
                          <h1 className="card__name">{pokemonDetail.name}</h1>
                          <h3 className="card__type">
                            {pokemonDetail.types[0].type.name}
                          </h3>
                          <table className="card__stats">
                            <tbody>
                              <tr>
                                <th>ID:</th>
                                <td>{pokemonDetail.id}</td>
                              </tr>
                              <tr>
                                <th>Peso:</th>
                                <td>{pokemonDetail.weight} lb</td>
                              </tr>
                              <tr>
                                <th>Altura:</th>
                                <td>{pokemonDetail.height} ft</td>
                              </tr>
                              <tr>
                                <th>Experiencia Base:</th>
                                <td>{pokemonDetail.base_experience}</td>
                              </tr>
                              <tr>
                                <th>movimiento:</th>
                                <td>{pokemonDetail.moves[0].move.name}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <></>
                      )}
                      <div className="card__abilities">
                        <h4 className="card__ability">
                          <span className="card__label">Habilidad</span>
                          {pokemonDetail.moves[1].move.name}
                        </h4>
                        <h4 className="card__ability">
                          <span className="card__label">Habilidad oculta</span>
                          {pokemonDetail.moves[2].move.name}
                        </h4>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default PokemonList;
