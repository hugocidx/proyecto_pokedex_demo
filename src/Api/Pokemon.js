import axios from "axios";

const getListPokemon = async (url) => {
  const urlAux =
    url == null ? "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0" : url;
  let result = null;

  await axios.get(urlAux).then((res) => {
    result = res.data;
  });
  return result;
};

const getDetailPokemon = async (url) => {
  // console.log(`esta es la funcion detail ${url}`);
  //esta funcion recibe la url completa del pokemon sin modificar nada en la variable url
  let result = null;

  await axios.get(url).then((res) => {
    //console.log(res.data)
    result = res.data;
  });
  //<button type="">volver a lista pokemon</button>
  return result;
};

export { getListPokemon, getDetailPokemon };
