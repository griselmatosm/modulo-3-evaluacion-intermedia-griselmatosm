import React from 'react';
import Pokemon from './Pokemon';
import '../styles/PokemonList.css'

function PokemonList(props) {
  //   console.log(props.data);
  const pokemons = props.data.map((pokemon) => {
    return (
        <Pokemon key={pokemon.id} pokemon={pokemon}/>
    );
  });

  return (
      <ul className="pokemons-list">{pokemons}</ul>
  );
}

export default PokemonList;
