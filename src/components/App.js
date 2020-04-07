import React from 'react';
import PokemonList from './PokemonList';
import pokemonData from '../data/data.json';
import '../styles/App.css';


function App(props) {
  return (
    <div className="App">
      <h1>Mi lista de Pokemon</h1>
      <PokemonList data={pokemonData}/>    
    </div>
  );
}

export default App;
