import React, { useEffect, useState } from "react";
import "./PokemonList.scss";
import { getListPokemon, getDetailPokemon } from "../../Api/Pokemon";
import Card from "../Cards/Card";

const PokemonList = ({listaProperty}) => {
  return (
    listaProperty != undefined && listaProperty.length > 0 ? 
      <div className="content-cards">
        {
          listaProperty.map((pokemonDetail,index)=>
            <Card pokemon={pokemonDetail} key={index} />
          )
        }
      </div>
    : <h1>No tengo info para pintar</h1>
  );
};
export default PokemonList;
