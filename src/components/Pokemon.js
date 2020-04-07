import React from 'react';
import '../styles/Pokemon.css'; 

function Pokemon(props) {
  const type = props.pokemon.types.map((itemType, i) => {
    return <li key={i}>{itemType}</li>;
  });

  return (

      <li className="Pokemon">
        <div className="pokemon-img">
        <img src={props.pokemon.url} alt={props.pokemon.name} />
        </div>
        <h2 className="pohemon-name">{props.pokemon.name}</h2>
        <ul className="pokemon-type">{type}</ul>
      </li>

  );
}

export default Pokemon;
