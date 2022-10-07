import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import PokemonList from "../../Components/PokemonList/PokemonList";
import Footer from "../../Components/Footer/Footer";
import Input from "../../Components/InputSearch/Input";
import { getListPokemon, getDetailPokemon } from "../../Api/Pokemon";
// import Card from "../../Components/Cards/Card";

const Home = ({}) => {
  //arreglo que devuelve pokemon
  const [ListPokemonDetail, setPokemonDetail] = useState([]);
  const [ListNext, setListNext] = useState(null);
  const [ListPreview, setListPreview] = useState(null);
  const onSubmit = (data) => {
    console.log(data);
  };
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
    });
    setPokemonDetail(ListPokemonDetail.concat(ListaAuxiliarPokemonDetail));
  };
  useEffect(() => {
    getPokemonData();
  }, []);
  //ejemplo de funcion asyncrona
  const getPokemonDetail = async (url) => {
    console.log(" este es de la funcion del getPokemonDetail", url);
    const pokemon = await getDetailPokemon(url);
    return pokemon;
  };
  //buscar pokemon por nombre usando react hooks forms
  const getPokemon = async (name) => {
    console.log(name);
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    console.log(url);
    // const pokemonDetail = await getPokemonDetail(url);
    // console.log("pokemon", pokemonDetail);
    // setPokemonDetail((ListPokemonDetail.length = 0));
    // setPokemonDetail(ListPokemonDetail.concat(pokemonDetail));
  };
  return (
    <div>
      <Header> </Header>
      <Input onSubmitInput={getPokemon} />
      <PokemonList> </PokemonList>
      {/* <Card> </Card> */}
      <Footer> </Footer>
    </div>
  );
};
export default Home;
