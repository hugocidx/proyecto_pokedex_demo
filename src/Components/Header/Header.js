import React from 'react';
import logoPokemon from '../Header/Header.css';

const Header = ({ }) => {
    return (
        <div className="App">
            <div className='App-header'>
                <a src={logoPokemon} className="App-logo" />
                <h1>
                    "Poke React"
                </h1>
            </div>
        </div>
    );
}
export default Header;