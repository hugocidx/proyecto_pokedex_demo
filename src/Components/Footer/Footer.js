import React, { Component } from "react";
import "./Footer.scss";
//importar imagen
import iconPokeapi from "../../Assets/icon/pokeapi.png";
import iconLinkln from "../../Assets/icon/iconLinkedin.svg";
import github from "../../Assets/icon/github.svg";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="enlaceApi">
          <p className="p1">
            En este sitio web ha sido desarrollado por la API publica:{" "}
          </p>
          <a href="https://pokeapi.co/" target="_blank">
            <button className="icon2">
              <img
                style={{ width: 350, height: 150 }}
                src={iconPokeapi}
                alt="pokeapi"
              />
            </button>{" "}
          </a>
        </div>
        <div className="enlaceGit">
          <p className="p2">
            Enlaces directos a mis repositorios y perfil de Linkedln:{" "}
          </p>
          <a href="https://github.com/hugocidx" target="_blank">
            <button className="icon2">
              <img
                src={github}
                alt="github"
                style={{ width: 80, height: 80 }}
              />
            </button>{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/hugo-cid-6442311a3/"
            target="_blank"
          >
            <button className="icon1">
              <img
                src={iconLinkln}
                alt="iconLinkln"
                style={{ width: 80, height: 80 }}
              />
            </button>{" "}
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
