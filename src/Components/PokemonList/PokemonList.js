import React, { useEffect, useState } from "react";
import "./PokemonList.scss";
import { getListPokemon, getDetailPokemon } from "../../Api/Pokemon";
import Card from "../Cards/Card";
import Input from "../InputSearch/Input";

const PokemonList = () => {
  //arreglo que devuelve pokemon
  // const [ListPokemonDetail, setPokemonDetail] = useState([]);
  // const [ListNext, setListNext] = useState(null);
  // const [ListPreview, setListPreview] = useState(null);

  const lista = () => Input {
    {
      console.log({lista});
        return (
          <PokemonList lista={ListPokemonDetail} />
          
          );
        }

      }
}
  
  // <Input ListPokemonDetail={setPokemonDetail} />;
  // <Input ListNext={setListNext} />;
  // <Input ListPreview={setListPreview} />;
  // <Input getPokemonData={getPokemonData()} />;

  //variable de estado que guarda los detalles del pokemon
  // const getPokemonData = async (url) => {
  //   setPokemonDetail(null);
  //   setPokemonDetail((ListPokemonDetail.length = 0));
  //   const pokemons = await getListPokemon(url);
  //   setListNext(pokemons.next);
  //   setListPreview(pokemons.previous);
  //   //crear lista vacia,recorrer lista de pokemon,traer getPokemonDetail, resultado agregar a lista inicial
  //   const ListaAuxiliarPokemonDetail = [];
  //   pokemons.results.map(async (pokemon) => {
  //     const pokemonDetail = await getPokemonDetail(pokemon.url);
  //     setPokemonDetail((ListPokemonDetail) =>
  //       ListPokemonDetail.concat(pokemonDetail)
  //     );
  //   });
  //   setPokemonDetail(ListPokemonDetail.concat(ListaAuxiliarPokemonDetail));
  // };
  // useEffect(() => {
  //   getPokemonData();
  // }, []);
  //ejemplo de funcion asyncrona
  // const getPokemonDetail = async (url) => {
  //   const pokemon = await getDetailPokemon(url);
  //   console.log(pokemon);
  //   return pokemon;
  // };
  return (
    <div className="App">
      {/* llamado a input desde componente */}
      {/* <div className="demo-flex-spacer"></div>
      <div className="webflow-style-input">
        <input className="submit" placeholder="ingresa pokemon"></input>
        <button onClick={() => getPokemon("mewtwo")}> Buscar </button>
      </div> */}
      {/* listado de pokemon */}
      <div className="selector">
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
      {/* carta de pokemon */}
      <div className="content-cards">
        {ListPokemonDetail.length > 0 ? (
          ListPokemonDetail.map((pokemonDetail, index) => {
            return <Card pokemon={pokemonDetail} key={index} />;
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default PokemonList;
