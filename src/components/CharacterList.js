import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import styled from 'styled-components';

export default function CharacterList() {
  const Homebutton = styled.a`
    font-size: 1.5rem;
    font-family: 'Oswald', sans-serif;
    text-decoration: none;
  `;

  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [filteredData, updateData] = useState([]);
  const search = charArr => {
    updateData(charArr);
  };
  useEffect(() => {

    Axios.get("https://rickandmortyapi.com/api/character/").then(response => {
      console.log(response.data.results);
      setCharacters(response.data.results);
      updateData(response.data.results);
    });
  }, []);

  return (
    <section className="character-list">
      <h2>Character List</h2>
      <Homebutton>
      <Link className="main-buttons" to={"/"}>
        Home
      </Link>
      </Homebutton>
      <SearchForm search={search} characters={characters} />
      {filteredData.map(char => {
        return <CharacterCard key={char.id} character={char} />;
      })}
    </section>
  );
}