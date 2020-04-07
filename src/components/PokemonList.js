import React from 'react';
import Pokemon from './Pokemon';

function PokemonList(props) {
  //   console.log(props.data);
  const pokemons = props.data.map((pokemon) => {
    return (
        <Pokemon key={pokemon.id} pokemon={pokemon}/>
    );
  });

  return (
      <ul>{pokemons}</ul>
  );
}

export default PokemonList;
