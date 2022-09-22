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
        console.log(`pokemon detail ${url}`);
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
            {/* input para buscar pokemon */}
                <babel for="pokemonName">Nombre Pokemon: </babel>
                <input type="text" id="pokemonName" />
                <button type="button" onclick="getValueInput()">
                    Buscar Pokemon!!
                </button>
                <p id="valueInput"></p>
            {/* scroll de pokemon */}
                {
                    ListPreview != null ? <button onClick={() => getPokemonData(ListPreview)} >Anterior </button> : <></>
                }
                {
                    ListNext != null ? <button onClick={() => getPokemonData(ListNext)} >Siguiente </button> : <></>
                }
            </div>
            <div className='container-pokemons'>
                <div className='description'>
                    {PokemonDetailSelected != null ? (<h1 className='detail'>
                        <div className='body' >
                            <div className="card">
                                <div className="image">
                                    <img src={PokemonDetailSelected.sprites.other.dream_world.front_default} />
                                </div>
                                <div className="details">
                                    <div className="center">
                                        <h1>  Nombre: {PokemonDetailSelected.name}  </h1>
                                        <ul>
                                            <p>
                                                Pokemon #: {PokemonDetailSelected.order}
                                            </p>
                                            <p>
                                                Peso: {PokemonDetailSelected.weight} lb
                                            </p>
                                            <p>
                                                Altura: {PokemonDetailSelected.height} ft
                                            </p>
                                            <p>
                                                Experiencia Base: {PokemonDetailSelected.base_experience}
                                            </p>
                                            {/* movimiento: {PokemonDetailSelected.moves.0.moves} */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <li>
                                movimiento: {PokemonDetailSelected.abilities.move.name}
                            </li>  */}
                    </h1>) : <></>
                    }
                </div>
                {
                    List.map((Pokemon, index) => {
                        return (
                            <div className="containerPokemon" onClick={() => getPokemonDetail(Pokemon.url)} key={index} >
                                <button className='buttonPokemon' >{Pokemon.name}</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default PokemonList;