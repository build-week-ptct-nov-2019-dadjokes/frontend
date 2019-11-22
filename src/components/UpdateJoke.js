import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "./dadjokes.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { putJokes } from "../actions/putAction";
import { getAllJokes } from "../actions/allJokesAction";

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

function UpdateJoke(props) {
  const jokes = useSelector(state => state.jokes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJokes());
  }, []);

  let updatedJoke = jokes.filter(joke => joke.id === props.match.params.id);
  console.log(updatedJoke, "updated");
  console.log(jokes, "jokes");

  // useSelector to grab jokes
  // filter jokes and grab props.match.params.id
  // on page load

  return (
    <div>
      <StyledNav>
        <img alt="Logo" src={logo} className="img" />
        <Link to="/mywallet" className="links">
          My Wallet
        </Link>
        <Link to="/userdashboard" className="links">
          User Dashboard
        </Link>
        <Link to="/searchjokes" className="links">
          Search Jokes
        </Link>
      </StyledNav>
      <StyledSection>
        <h1>Welcome User!</h1>
        <StyledP>
          Here you can add a joke to your wallet, or public list to display to
          everyone!
        </StyledP>
        <form>
          <div>
            <input type="text" name="joke" placeholder="Joke Setup" />
          </div>
          <div>
            <input type="text" name="punchline" placeholder="Joke Punchline" />
          </div>
          <label>Check for private</label>
          <input
            type="checkbox"
            name="privateJoke"
            // checked={values.privateJoke}
          />
          <button className="search-button" type="submit">
            Add Joke
          </button>
        </form>
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

export default UpdateJoke;
