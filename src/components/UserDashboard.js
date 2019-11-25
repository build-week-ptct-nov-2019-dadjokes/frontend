import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import logo from "./dadjokes.png";
import { Link } from "react-router-dom";
import JokeCard from "./JokeCard";
import { getAllJokes } from "../actions/allJokesAction";
import Logout from "./Logout";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
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
  // const [joke, setJoke] = useState([]);

  useEffect(() => {
    dispatch(getAllJokes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  // const onSubmit = event => {
  //   event.preventDefault();
  //   setJoke(jokes[Math.floor(Math.random() * jokes.length)]);
  // };

  return (
    <div>
      <StyledNav>
        <img alt="Logo" src={logo} className="img" />
        <Link to="/mywallet" className="links">
          My Wallet
        </Link>
        {/* <Link to="/searchjokes" className="links">
          Search Jokes
        </Link> */}
        <Link to="/addjoke" className="links">
          Add Joke
        </Link>
        <Logout />
      </StyledNav>
      <StyledSection>
        <h1>Welcome User!</h1>
        <StyledP>
          Here you can find all of our jokes, and have features at the top such
          as view your private wallet, search, and add jokes.
        </StyledP>
        {/* <form onSubmit={onSubmit}>
          <button type="submit" className="search-button">
            New Joke
          </button>
        </form> */}
        {jokes && jokes.map(joke => <JokeCard key={joke.id} joke={joke} />)}
      </StyledSection>
      {/* <footer>
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
      </footer> */}
    </div>
  );
}

export default UserDashboard;
