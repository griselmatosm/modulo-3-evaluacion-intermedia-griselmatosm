import React from 'react';
import Pokemon from './Pokemon';
import '../styles/PokemonList.css';

function PokemonList(props) {

  const pokemons = props.pokemon.map((pokemon) => {
    return <Pokemon key={pokemon.id} pokemon={pokemon}  addFavorite={props.addFavorite} />;
  });

  return <ul className="pokemons-list">{pokemons}</ul>;
}

export default PokemonList;
