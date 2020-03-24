import React from "react";
import styled from "styled-components";

export default function EpisodeCard(props) {
  const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2%;

    
  `;

  const CardContent = styled.div`
    text-align: center;
    border: 1px solid black;
    border-radius: 2rem;
    background: lightblue;
    
    &:hover {
      border: 2px solid #4dcd32;
    }
    
    h3 {
      font-size: 2rem;
    }

    p{
      font-size:1.2rem;
    }
  `;

  return (
    <Card>
     <CardContent> 
      <h2> {props.name} </h2>
      <p>Episode: {props.number} </p>
      <p>Date Aired: {props.airDate} </p>
      </CardContent>  
    </Card>
  );
}
