import React from "react";
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

export default function WelcomePage() {
  const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

  const WelcomePage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    a {
      text-decoration: none;
    }
     
    h2 {
      font-size: 1.3rem;
      color: black;
      font-family: 'Oswald', sans-serif;
      

      &:hover {
        color: lightblue;
        font-size: 1.5rem;
        animation: ${rotate} 4s linear infinite;

      }
    }
  `;

  const MainPic = styled.img`
    border: 1px solid black;
    border-radius: 3rem;
    box-shadow:20px 20px 10px grey; 
    transition: transform 300ms ease-in-out;
   

    &:hover {
      box-shadow:20px 20px 10px lightblue; 
      transform: translate(2px, 5px) rotate(5deg)
    }
    `;

  return (
    <WelcomePage>
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <MainPic
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>

      <Link className="main-buttons" to ={'/characters'}><h2>See Characters</h2></Link>

    </WelcomePage>
  );
}