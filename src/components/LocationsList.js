import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard.js";
import { Link } from "react-router-dom";
import styled from "styled-components"

export default function LocationsList() {
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
      <MainSection>
      <h2>Locations</h2>
      <Tabs>
          <Buttons>
            <Link to={"/"}>
              Home
            </Link>

            <Link to={"/characters"}>
              Characters
            </Link>

            <Link to={"/locations"}>
              Locations
            </Link>

            <Link to={"/episodes"}>
              Episodes
            </Link>
          </Buttons>
        </Tabs>
        {locationData.map(location => (
          <LocationCard
            name={location.name}
            type={location.type}
            dimension={location.dimension}
          />
        ))}
    </MainSection>

          
    </div>
  );
}
