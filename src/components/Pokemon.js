import React from 'react';

function Pokemon(props) {
//   console.log(props.pokemon.types);
  const type = props.pokemon.types.map((itemType, i) => {
    return <li key={i}>{itemType}</li>;
  });

  return (
    <div className="Pokemon">
      <li>
        <img src={props.pokemon.url} alt={props.pokemon.name} />
        <h2>{props.pokemon.name}</h2>
        <ul>{type}</ul>
      </li>
    </div>
  );
}

export default Pokemon;
