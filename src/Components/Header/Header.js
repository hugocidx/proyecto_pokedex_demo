import React from "react";
import logoPokemon from "../Header/Header.css";
import AtrapalosYa from "../../Assets/music/AtrapalosYa.mp3";

const Header = ({}) => {
  return (
    <div className="App">
      <div className="App-header">
        <a src={logoPokemon} className="App-logo" />
        {/* <h1>
                    "Poke React"
                </h1> */}
        <audio className="audio" src={AtrapalosYa} controls></audio>
      </div>
    </div>
  );
};
export default Header;
