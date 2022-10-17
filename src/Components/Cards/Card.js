import React from "react";
import "../Cards/Card.scss";

const Card = ({ pokemon }) => {
  return (
    <div>
      <div className="cards">
        <figure className="card card--normal">
          {/* <figure className={`"card card--"${pokemon.types[0].type.name}`}> */}
          <div className={pokemon.types[0].type.name}>
            <div className="card__image-container">
              <img
                className="imgPokemon"
                src={pokemon.sprites.other.dream_world.front_default}
                alt="imagen de pokemon"
              />
            </div>
            <figcaption className="card__caption">
              {pokemon != null ? (
                <div className="detail">
                  <h1 className="card__name">{pokemon.name}</h1>
                  <h3 className="card__type">{pokemon.types[0].type.name}</h3>
                  <table className="card__stats">
                    <tbody>
                      <tr>
                        <th>ID:</th>
                        <td>{pokemon.id}</td>
                      </tr>
                      <tr>
                        <th>Peso:</th>
                        <td>{pokemon.weight} lb</td>
                      </tr>
                      <tr>
                        <th>Altura:</th>
                        <td>{pokemon.height} ft</td>
                      </tr>
                      <tr>
                        <th>Experiencia Base:</th>
                        <td>{pokemon.base_experience}</td>
                      </tr>
                      <tr>
                        <th>movimiento:</th>
                        <td>{pokemon.moves[0].move.name}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <></>
              )}
              <div className="card__abilities">
                <h4 className="card__ability">
                  <span className="card__label">Habilidad</span>
                  {pokemon.moves[1].move.name}
                </h4>
                <h4 className="card__ability">
                  <span className="card__label">Habilidad oculta</span>
                  {pokemon.moves[2].move.name}
                </h4>
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default Card;
