import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import logo from "./dadjokes.png";
import { Link } from "react-router-dom";
import JokeCard from "./JokeCard";
import { getAllJokes } from "../actions/allJokesAction";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  background-color: white;
  padding-bottom: 0.5rem;
`;

const StyledP = styled.p`
  color: black;
`;

const StyledSection = styled.section`
  text-align: center;
  font-family: "Lucida Console", Monaco, monospace;
  color: #0e0e40;
  background-color: #77bfb8;
  padding-top: 3rem;
`;

function UserDashboard() {
  const jokes = useSelector(state => state.jokes);
  const dispatch = useDispatch();
  const [joke, setJoke] = useState([]);

  useEffect(() => {
    dispatch(getAllJokes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = event => {
    event.preventDefault();
    setJoke(jokes[Math.floor(Math.random() * jokes.length)]);
  };

  return (
    <div>
      <StyledNav>
        <img alt="Logo" src={logo} className="img" />
        <Link to="/mywallet" className="links">
          My Wallet
        </Link>
        <Link to="/searchjokes" className="links">
          Search Jokes
        </Link>
        <Link to="/addjoke" className="links">
          Add Joke
        </Link>
      </StyledNav>
      <StyledSection>
        <h1>Welcome User!</h1>
        <StyledP>
          Here you can find all of our jokes, and have features at the top such
          as view your private wallet, search, and add jokes.
        </StyledP>
        <StyledP>
          One of our jokes is displayed below, press next joke to get another.
        </StyledP>
        <form onSubmit={onSubmit}>
          <button type="submit" className="search-button">
            New Joke
          </button>
        </form>
        {joke && <JokeCard joke={joke} />}
      </StyledSection>
      <footer>
        <StyledNav>
          <Link to="#">Home</Link>
          <Link to="#">About Us</Link>
        </StyledNav>
      </footer>
    </div>
  );
}

export default UserDashboard;
