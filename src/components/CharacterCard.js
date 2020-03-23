import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {

  const Card = styled.div`
    width: 80%;
    padding: 20px;
    border: 2px solid black;
    border-radius: 10px;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    font-family: 'Oswald', sans-serif;
    box-shadow:20px 20px 10px grey;
    `;

  const CardImg = styled.img`
    width: 250px;
    height: 250px;
    border: 3px black solid;
    border-radius: 5rem;

    &:hover {
      border: 3px lightblue solid;
    }
  `;

  const CardInfo = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 50%;

  `;

  const Status = styled.div`
  background: black;
  height: 30px;
  vertical-align: middle;
  color: white;
  padding: 10px;
  border-radius: 2rem;
  `;

  return (
    <div className="character-card">
      <Card>
        <CardImg src={props.character.image} />
        <CardInfo>
          <div class='idNumber'>ID: {props.character.id}</div>
          <div class='charName'>Name: {props.character.name}</div>
          <div class='charGender'>Gender: {props.character.gender}</div>
          <div class='charSpecies'>Species: {props.character.species}</div>
          <div class='charOrigin'>Origin: {props.character.origin.name}</div>
        </CardInfo>
        <Status>Status: {props.character.status}</Status>
      </Card>
    </div>
  );
}