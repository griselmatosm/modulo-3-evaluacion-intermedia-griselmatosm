import React from 'react';
import '../styles/Pokemon.css'; 

function Pokemon(props) {
//   console.log(props.pokemon.types);
  const type = props.pokemon.types.map((itemType, i) => {
    return <li key={i}>{itemType}</li>;
  });

  return (

      <li className="Pokemon">
        <img src={props.pokemon.url} alt={props.pokemon.name} />
        <h2>{props.pokemon.name}</h2>
        <ul>{type}</ul>
      </li>

  );
}

export default Pokemon;
