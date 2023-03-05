import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const HomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const NavBar = styled.div`
  width: 100%;
  height:10%;
  padding:1%;
  display: flex;
  align-items:center;
  justify-content: flex-end;
  gap: 1rem;
  background-color:#282c34;
  border-bottom:2px solid white;
`;

export const StyledHomePage = styled.div`
  background-color: #282c34;
  display: flex;
  height:90%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  font-size: clamp(3rem, 5vw, 7vw);
  color: #eee;
  font-weight: 700;
  margin: 0;
  padding: 0;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;

export const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 20%;
  @media screen and (min-width: 790px) {
    width: 20%;
  }
  background-color: rgb(58, 66, 81, 0.9);
  z-index: 99;
  padding:1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const StyledToggle = styled.button`
  color: #222;
  background: #eee;
  padding: 0.75rem;
  display: flex;
  place-items: center;
  font-size: 2rem;
  cursor: pointer;
`;

export const StyledProfile = styled.div`
  border-radius: 50%;
  color: #222;
  background: #eee;
  padding: 0.75rem;
  display: flex;
  place-items: center;
  font-size: 2rem;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  color: #eee;
  text-decoration: none;
  font-size: clamp(2rem, 1vw, 1vw);
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  transition: 0.2s all ease-in-out;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  &:hover {
    transition: 0.2s all ease-in-out;
    color: orangered;
  }
  @media screen and (max-width: 400px) {
    font-size: clamp(1rem, 1vw, 1vw);
  }
`;

export const CloseToggle = styled.button`
  position: fixed;
  top: 5%;
  right: 4%;
  background: #222;
  color: #fff;
  padding: 0.75rem;
  display: flex;
  place-items: center;
  font-size: 2rem;
  cursor: pointer;
`;
