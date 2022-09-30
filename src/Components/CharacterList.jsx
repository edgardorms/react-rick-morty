import { useEffect, useState } from "react";
import Character from "./Character.jsx";

function NavPage(props) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <p>Page: {props.page} </p>
      <button
        className="btn btn-primary btn-sm"
        onClick={() =>{props.setPage(props.page+1)} }
      >
        Page: {props.page+1}
      </button>
    </div>
  );
}

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setCharacters(data.results);
    }
    fetchData();
  }, [page]);

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage}/>
      <div className="row">
        {characters.map((character) => {
          return (
            <div className="col-md-4 row" key={character.id}>
              <Character character={character} />
            </div>
          );
        })}
      </div>
      <NavPage page={page} setPage={setPage}/>
    </div>
  );
}

export default CharacterList;
