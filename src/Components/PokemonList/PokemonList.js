import React, { Component, useEffect, useState } from 'react';
import './PokemonList.scss';
// import InputPokemon from '../Input/Input.js'
import { getListPokemon, getDetailPokemon } from '../../Api/Pokemon';

const PokemonList = ({ }) => {
    //arreglo que devuelve pokemon
    const [ListPokemonDetail, setPokemonDetail] = useState([])
    const [ListNext, setListNext] = useState(null)
    const [ListPreview, setListPreview] = useState(null)
    //variable de estado que guarda los detalles del pokemon
    const getPokemonData = async (url) => {
        setPokemonDetail(null)
        setPokemonDetail(ListPokemonDetail.length =0)
        const pokemons = await getListPokemon(url);
        setListNext(pokemons.next)
        setListPreview(pokemons.previous)
        //crear lista vacia,recorrer lista de pokemon,traer getPokemonDetail, resultado agregar a lista inicial
        const ListaAuxiliarPokemonDetail = []
        pokemons.results.map(async (pokemon) => {
            const pokemonDetail = await getPokemonDetail(pokemon.url)
            setPokemonDetail(ListPokemonDetail => ListPokemonDetail.concat(pokemonDetail))
            // ListPokemonDetail.push(pokemonDetail)
        })
        setPokemonDetail(ListPokemonDetail.concat(ListaAuxiliarPokemonDetail))
        // setPokemonDetail(ListaAuxiliarPokemonDetail)
    }
    useEffect(() => {
        getPokemonData(null)
    }, [])
    //ejemplo de funcion asyncrona
    const getPokemonDetail = async (url) => {
        const pokemon = await getDetailPokemon(url);
        return pokemon
    }
    //buscar pokemon por nombre
    const getPokemon = async (name) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`
        const pokemonDetail = await getPokemonDetail(url);
        console.log("pokemon", pokemonDetail);
        setPokemonDetail(ListPokemonDetail.length =0)
        setPokemonDetail(ListPokemonDetail.concat(pokemonDetail))
    }
    //llamado a input desde componente
    // <InputPokemon></InputPokemon>

    return (
        <div className="App">
            <div className='selector'>    
                <p id="valueInput"></p>
                {/* listado de pokemon */}
                {
                    ListPreview != null ? <button className='ButtonPreview' onClick={() => getPokemonData(ListPreview)} >Anterior </button> : <></>
                }
                {
                    ListNext != null ? <button className='ButtonNext' onClick={() => getPokemonData(ListNext)} >Siguiente </button> : <></>
                }
            </div>
            <h1>{ListPokemonDetail.length > 0 ? ListPokemonDetail.lenght : "no hay nada"} </h1>
            <div className='content-cards'>
                {
                    ListPokemonDetail.length > 0 ? ListPokemonDetail.map((pokemonDetail, index) => {
                        return <div key={index} >
                            <div className='cards'>
                                <figure className="card card--normal">
                                    <div className="card__image-container">
                                    <img className='imgPokemon' src={pokemonDetail.sprites.other.dream_world.front_default} />
                                    </div>
                                    <figcaption className="card__caption">
                                        {pokemonDetail != null ? (<div className='detail'>
                                            <h1 className="card__name">{pokemonDetail.name}</h1>
                                            <h3 className="card__type">
                                                normal
                                            </h3>
                                            <table className="card__stats">
                                                <tbody>
                                                    <tr>
                                                        <th>ID:</th>
                                                        <td>{pokemonDetail.order}</td>
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
                                                        <td>{pokemonDetail.moves[0].moves}</td> 
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>) : <></>
                                        }
                                        <div className="card__abilities">
                                            <h4 className="card__ability">
                                                <span className="card__label">Habilidad</span>
                                                Run Away
                                            </h4>
                                            <h4 className="card__ability">
                                                <span className="card__label">Habilidad oculta</span>
                                                Anticipation
                                            </h4>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div >
                        </div>
                    }) : <></>
                }
            </div>
        </div >
    );
}
export default PokemonList;

