import React, { useEffect, useState } from 'react';
import './PokemonList.css';
import { getListPokemon, getDetailPokemon } from '../../Api/Pokemon';

const PokemonList = ({ }) => {
    const [List, setList] = useState([])

    const [ListNext, setListNext] = useState(null)

    const [ListPreview, setListPreview] = useState(null)
    //variable de estado que guarda los detalles del pokemon
    const [PokemonDetailSelected, setPokemonDetailSelected] = useState(null)

    const getPokemonData = async (url) => {
        console.log("entre pokemon data");
        const pokemons = await getListPokemon(url);
        console.log("pokemon", pokemons);
        setList(pokemons.results)
        setListNext(pokemons.next)
        setListPreview(pokemons.previous)
    }
    //ejemplo de funcion asyncrona
    const getPokemonDetail = async (url) => {
        console.log(`entre pokemon detail ${url}`);
        const pokemon = await getDetailPokemon(url);
        console.log("pokemon", pokemon);
        setPokemonDetailSelected(pokemon)
    }

    useEffect(() => {
        // setList([bolbasaur, charmander, squartle])
        getPokemonData(null)
    }, [])

    return (
        <div className="App">
            <div className='selector'>
                {
                    ListPreview != null ? <button onClick={() => getPokemonData(ListPreview)} >Anterior </button> : <></>
                }
                {
                    ListNext != null ? <button onClick={() => getPokemonData(ListNext)} >Siguiente </button> : <></>
                }
            </div>
            <div>
            <div className='description'>
                {PokemonDetailSelected != null ? (<h1 className='detail'>
                    Base experience:  {PokemonDetailSelected.base_experience}
                </h1>) : <></>
                }
            </div>
                {
                    List.map((Pokemon, index) => {
                        return (
                            <div className="containerPokemon" onClick={() => getPokemonDetail(Pokemon.url)} key={index} >
                                <button className='buttonPokemon' >{Pokemon.name} </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default PokemonList;