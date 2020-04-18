import React, { useState } from 'react';
import PokemonList from './PokemonList';
import pokemonData from '../data/data.json';
import '../styles/index.css';
import '../styles/App.css';

function App() {
  const [pokemon] = useState(pokemonData);

  // function addFavorite(idPokemon) {
  //   const indexId = pokemon.findIndex((el) => el.id === idPokemon);

  //   let favPokemon = pokemon[idPokemon]

  //   if (favPokemon !== idPokemon) {
  //     pokemon[idPokemon].isFavorite = true;
  //   } else {
  //     pokemon[idPokemon].isFavorite = false; 
  //   }
  // }
  return (
    <div className="App">
      <h1>Mi lista de Pokemon</h1>
      <PokemonList pokemon={pokemon}/>
    </div>
  );
}

export default App;
