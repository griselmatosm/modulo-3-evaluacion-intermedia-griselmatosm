import React, { useState } from 'react'
import PokemonList from './PokemonList';
import pokemonData from '../data/data.json';
import '../styles/index.css'
import '../styles/App.css';


function App() {
  const [pokemon] = useState(pokemonData);   
  return (
    <div className="App">
      <h1>Mi lista de Pokemon</h1>
      <PokemonList pokemon={pokemon}/>    
    </div>
  );
}

export default App;
