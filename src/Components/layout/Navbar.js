import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = styled.section`
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-transform: uppercase;
  font-family: -apple-system,
		'BlinkMacSystemFont',
		'Segoe UI','Roboto',
		'Helvetica','Arial',
		sans-serif,'Apple Color Emoji',
		'Segoe UI Emoji','Segoe UI Symbol';
 `;

const Home = styled.div` 
  position: absolute;
  top: 2%;
  left: 1%;
  /* border: 1px solid rgb(0, 128, 0); */
  background: rgb(204, 204, 204);
  padding: 8px;
  border-radius: 0.2rem;
  color: rgb(82, 82, 82);
`;

const Navtitle = styled.h1`
  font-size: 3.75rem;
  margin: 0;
`;

const Navsubtitle = styled.h2`
  font-size: 1.875rem;
  color: rgb(255, 152, 0);
  margin: 0;
  background: black;
`;

export default class Counter extends React.Component {
  render() {
	return(
	  <Navbar>
		<Link to="/">
		  <Home id="home-button"><FontAwesomeIcon icon={faHome} /></Home>
		</Link>
		<Navtitle>THE RICK AND MORTY APP</Navtitle>
		<Navsubtitle>Hey, did you ever want to hold a Terry fold?</Navsubtitle>
	  </Navbar>
	)
  }
}
