import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import styled from 'styled-components';

export default function CharacterList() {
  const MainSection = styled.div`
  text-align: center;
  `;

  const Tabs = styled.div`
  a {
    display: flex;
    justify-content: space-evenly;
  }
  `;

  const Buttons = styled.a`
    font-size: 1.5rem;
    font-family: 'Oswald', sans-serif;
    color: black;

    a {
    text-decoration: none;
      &:hover {
        color: #4dcd32;
      }
    }
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
    <div>
    <MainSection>
      <h2>Character List</h2>
      <Tabs>
          <Buttons>
            <Link to={"/"}>
              Home
            </Link>
            <Link to={"/locations"}>
              Locations
            </Link>
            <Link to={"/characters"}>
              Characters
            </Link>

            <Link to={"/episodes"}>
              Episodes
            </Link>
          </Buttons>
        </Tabs>
    </MainSection>
    
    <SearchForm search={search} characters={characters} />
    {filteredData.map(char => {
      return <CharacterCard key={char.id} character={char} />;
    })}
    </div>
  );
}