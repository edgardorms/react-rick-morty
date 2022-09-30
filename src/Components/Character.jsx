function Character({ character }) {
  return (
    <div className="text-center p-5" key={character.id}>
      <h2>{character.name}</h2>
      <img
        className="img-fluid rounded-pill"
        src={character.image}
        alt={character.name}
      ></img>
    </div>
  );
}

export default Character;
