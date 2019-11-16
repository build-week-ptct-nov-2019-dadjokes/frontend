import React from "react";
import styled from "styled-components";
import logo from "./dadjokes.png";
import { Link } from "react-router-dom";
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
    color: #0E0E40;
    background-color: #77BFB8;
    padding-top: 3rem;
`;

let Joke = {
    title: `"Dad, did you get a haircut?"`,
    joke: `"No, I got them all cut!"`,
};

const JokeCard = () => {
    return(
        <div>
            <Card>
                <CardBody>
                    <CardTitle>{Joke.title}</CardTitle>
                    <CardText>{Joke.joke}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

function UserDashboard() { 
    return(
        <div>
            <StyledNav>
                <img alt="Logo" src={logo} className="img" />
                <Link to="/mywallet" className="links">My Wallet</Link>
                <Link to="/searchjokes" className="links">Search Jokes</Link>
                <Link to="/addjoke" className="links">Add Joke</Link>
            </StyledNav>
            <StyledSection>
                <h1>Welcome User!</h1>
                <StyledP>Here you can find all of our jokes, and have features at the top such as view your private wallet, search, and add jokes.</StyledP>
                <StyledP>Test joke displayed below</StyledP>
                <JokeCard />
            </StyledSection>
            <footer>
                <StyledNav>
                    <a className="links" href="#">Home</a>
                    <a className="links" href="#">About Us</a>
                </StyledNav>
            </footer>
        </div>
    )
}

export default UserDashboard;