import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../index.css";
import logo from "./dadjokes.png";
import { axiosWithAuth as axios } from "../utils/axiosConfig";
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
  const [jokes, setJokes] = useState([]);
  const [joke, setJoke] = useState([]);

  useEffect(() => {
    axios()
      .get("/api/jokes/public")
      .then(res => {
        setJokes(res.data);
        setJoke({
          id: 100,
          joke: "Don't trust atoms.",
          punchline: "They make up everything!"
        });
      })
      .catch(error => {
        console.log(error);
      });
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
        <JokeCard id={joke.id} joke={joke.joke} punchline={joke.punchline} />
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

export default PublicDashboard;
