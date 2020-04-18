import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Pokemon.css';

function Pokemon(props) {
  
  const type = props.pokemon.types.map((itemType, i) => {
    return <li key={i}>{itemType}</li>;
  });

  const handleClick = (ev) => {
    const idPokemon = ev.currentTarget.id;
    props.addFavorite(idPokemon)
  }

  return (
    <li className="Pokemon">
      <div className="pokemon-img" id={props.pokemon.id} onClick={handleClick}>
        <img src={props.pokemon.url} alt={props.pokemon.name} />
      </div>
      <h2 className="pohemon-name">{props.pokemon.name}</h2>
      <ul className="pokemon-type">{type}</ul>
    </li>
  );
}

// control de propTypes
Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default Pokemon;
