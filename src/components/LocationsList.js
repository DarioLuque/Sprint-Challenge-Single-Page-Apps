import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard.js";
import { Link } from "react-router-dom";
import styled from "styled-components"

export default function LocationsList() {
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
    }
    `;

  const [locationData, setLocation] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(res => {
        console.log("working", res.data.results);

        setLocation(res.data.results);
      })

      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <section className="character-list">
      <h2>Character List</h2>
      <Tabs>
      <Buttons>
      <Link className="main-buttons" to={"/"}>
        Home
      </Link>
      <Link className="main-buttons" to={"/locations"}>
        Locations
      </Link>
      <Link className="main-buttons" to={"/characters"}>
        Characters
      </Link>
      </Buttons>
      </Tabs>
    </section>
        <div>{locationData.map(location => (
          <LocationCard
            name={location.name}
            type={location.type}
            dimension={location.dimension}
          />
        ))}</div>
    </div>
  );
}
