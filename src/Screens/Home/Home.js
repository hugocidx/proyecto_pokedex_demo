import React from 'react';
import logoPokemon from './Home.css'
import PokemonList from '../../Components/PokemonList/PokemonList';
import Footer from '../../Components/Footer/Footer';


const Home = ({ }) => {
    return (
        
            <div className="App">
                <div className='App-header'>
                    <a src={logoPokemon} className="App-logo" />
                    <h1>
                        "PokeReact"
                    </h1>
                </div>
                <PokemonList> </PokemonList>
                <Footer />
            </div>
        
    );
}
export default Home;