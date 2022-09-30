function Character({ character }) {
  return (
    <div key={character.id}>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name}></img>
    </div>
  );
}

export default Character;
