import React, { useState, useEffect } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard.js";
import styled from "styled-components"
import {Link} from "react-router-dom"

export default function EpisodeList(props) {
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

  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(res => {
        console.log("working", res.data.results);

        setEpisode(res.data.results);
      })

      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <MainSection>
        <h2>Episodes</h2>
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
      <div>{episode.map(episode => (
        <EpisodeCard
          episode={episode}
          name={episode.name}
          number={episode.id}
          airDate={episode.air_date}
        />
      ))}</div>
    </div>
  );
}
