import React from "react";
import Header from "../../Components/Header/Header";
import PokemonList from "../../Components/PokemonList/PokemonList";
import Footer from "../../Components/Footer/Footer";
import Input from "../../Components/InputSearch/Input";
// import { useForm } from "react-hook-form";

const Home = ({}) => {
  const onSubmit = (data) => {
    console.log(data);

    //   const getPokemon = async (name) => {
    //     const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    //     const pokemonDetail = await getPokemonDetail(url);
    //     console.log("pokemon", pokemonDetail);
    //     setPokemonDetail((ListPokemonDetail.length = 0));
    //     setPokemonDetail(ListPokemonDetail.concat(pokemonDetail));
    //   };
  };

  return (
    <div>
      <Header> </Header>
      <Input InputName={"PokemonSearch"} onSubmitInput={onSubmit}>
        {" "}
      </Input>
      <PokemonList> </PokemonList>
      <Footer> </Footer>
    </div>
  );
};
export default Home;
