import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import logo from "./dadjokes.png";
import { Link } from "react-router-dom";
import { getAllJokes } from "../actions/allJokesAction";
import { Col } from "reactstrap";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

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
function JokeCard(props) {
  return (
    <div>
      <Card key={props.id}>
        <CardBody>
          <CardTitle>{props.joke}</CardTitle>
          <CardText>{props.punchline}</CardText>
        </CardBody>
        <form>
          <button className="search-button" type="submit">Update</button>
        </form>
        <form>
          <button className="search-button" type="submit">Delete</button>
        </form>
      </Card>
    </div>
  );
}
function UserDashboard() {
  const jokes = useSelector(state => state.jokes);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getAllJokes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(jokes);
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
          All of our jokes are displayed below for your viewing pleasure, we hope you enjoy them!
        </StyledP>
        
          {jokes.map(index => {
            return(
              <Col>
                <JokeCard key={index.id} joke={index.joke} punchline={index.punchline} />
              </Col>
              
              
            )
          })}
        
      </StyledSection>
    </div>
  );
}

export default UserDashboard;
