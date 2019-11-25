import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../index.css";
import logo from "./dadjokes.png";
import { getPublicJokes } from "../actions/index";
import JokeCard from "./JokeCard";

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

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  background-color: white;
  padding-bottom: 0.5rem;
`;

function PublicDashboard() {
  const jokes = useSelector(state => state.jokes);
  const dispatch = useDispatch();
  const [joke, setJoke] = useState([]);

  useEffect(() => {
    dispatch(getPublicJokes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = event => {
    event.preventDefault();
    setJoke(jokes[Math.floor(Math.random() * jokes.length)]);
  };

  return (
    <div>
      <StyledNav>
        <img src={logo} className="img" alt="Logo" />
        <Link className="links" to="/login">
          Login
        </Link>
        <Link className="links" to="/register">
          Register
        </Link>
      </StyledNav>
      <StyledSection>
        <h1>Welcome to Dad Jokes! </h1>
        <StyledP>
          This is an app dedicated to all of the people out there who enjoy good
          (or bad) dad jokes.
        </StyledP>
        <StyledP>
          Some of our features include viewing public jokes open to everyone, to
          private jokes you can save to your account if you've registered.
        </StyledP>
        <StyledP>
          Displayed below is a joke included in our jokes database.
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
          <a
            href="https://elegant-mclean-a95fe8.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Home
          </a>
          <a
            href="https://elegant-mclean-a95fe8.netlify.com/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Us
          </a>
        </StyledNav>
      </footer>
    </div>
  );
}

export default PublicDashboard;
