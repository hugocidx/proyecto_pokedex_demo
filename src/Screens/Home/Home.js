import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import PokemonList from "../../Components/PokemonList/PokemonList";
import Footer from "../../Components/Footer/Footer";
import Input from "../../Components/InputSearch/Input";
import { getListPokemon, getDetailPokemon } from "../../Api/Pokemon";

const Home = ({}) => {
  //ListPokemonDetail guarda detalle de lista pokemones, setPokemonDetail cambia el valor de la lista
  const [ListPokemonDetail, setPokemonDetail] = useState([]);
  const [ListNext, setListNext] = useState(null);
  const [ListPreview, setListPreview] = useState(null);

  //trae lista basica de pokemones donde solo se ve su nombre y url donde puedo obtener su informacion
  const getPokemonData = async (url) => {
    const pokemons = await getListPokemon(url); //llamado a api
    setListNext(pokemons.next); //CAMBIO VALOR DE URL POR LA QUE ME RETORNA EL SERVICIO
    setListPreview(pokemons.previous); //CAMBIO VALOR DE URL POR LA QUE ME RETORNA EL SERVICIO
    getPokemonDetailFromListPokemons(pokemons.results); //llama a la funcion que se encarga de obtener el detalle de la lista recorriendola 1x1
  };

  /**
   * getPokemonDetailFromListPokemons obtiene el detalle recorriendo una lista de pokemones
   * @param {Array<Object>} listaDePokemones //lista con solo nombre y url
   * @returns {void}
   */
  const getPokemonDetailFromListPokemons = async (listaDePokemones) => {
    //en esta variable se guarda lo que se esta retornando en el map en este caso el detalle del pokemon almacenandolo como lista
    const detallePokemones = await Promise.all(
      //lo encontre en internet, con map aveces retorna promesa y con esto me asegure de que la resuelva primero
      listaDePokemones.map(async (pokemon) => {
        //map retorna una
        return await getPokemonDetail(pokemon.url);
      })
    );
    setPokemonDetail(detallePokemones); //se actualiza el valor de pokemonDetail lista la cual guarda el detalle de los pokemones
  };

  //Funcion que se encarga de llamar a getPokemonData por primera vez
  useEffect(() => {
    getPokemonData();
  }, []);

  //ejemplo de funcion asyncrona
  //Obtiene detalle de pokemon
  const getPokemonDetail = async (url) => {
    const pokemon = await getDetailPokemon(url); //llamado a api retorna el detalle de 1 pokemon
    return pokemon; //aqui lo retorna
  };

  // //buscar pokemon por nombre usando react hooks forms
  const getPokemon = async (name) => {
    //creamos una url para obtener el detalle en este caso asignando el nombre del pokemon buscado
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    //Creo un objeto con la misma estructura de la lista basica de pokemones con nombre y url la cual me permite buscar el detalle de este pokemon, la funcion recibe una lista de estos objetos por eso es de tipo lista
    const objetoParaObtenerDetallePokemon = [{ name: "buscado..", url }];
    //llamo a la misma funcion que cuando obtengo la lista de 10 pokemones, solo que es una lista de 1 elemento
    getPokemonDetailFromListPokemons(objetoParaObtenerDetallePokemon);
  };
  return (
    <div>
      <Header />
      <Input onSubmitInput={getPokemon} />
      <button onClick={() => getPokemonData(ListNext)}>Siguente</button>
      {/**
       * Botonera
       * sigunte
       * anterior
       */}
      <PokemonList listaProperty={ListPokemonDetail} />
      {/* <Card> </Card> */}
      <Footer />
    </div>
  );
};
export default Home;
