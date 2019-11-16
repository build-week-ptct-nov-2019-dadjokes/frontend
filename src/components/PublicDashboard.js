import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../index.css";
import logo from "./dadjokes.png";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

export const StyledP = styled.p`
    color: black;
`;

const StyledSection = styled.section`
    text-align: center;
    font-family: "Lucida Console", Monaco, monospace;
    color: #0E0E40;
    background-color: #77BFB8;
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

let Joke = {
    title: `"Dad, did you get a haircut?"`,
    joke: `"No, I got them all cut!"`,
};

export const JokeCard = () => {
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


function PublicDashboard() {  
    
    return(
        <div>
            <StyledNav>
                <img src={logo} className="img" alt="Logo" />
                <Link className="links" to="/login">Login</Link>
                <Link className="links" to="/register">Register</Link>
            </StyledNav>
            <StyledSection>
                <h1>Welcome to Dad Jokes! </h1>
                
                <StyledP>This is an app dedicated to all of the people out there who enjoy good (or bad) dad jokes.</StyledP>
                <StyledP>Some of our features include viewing public jokes open to everyone, to private jokes you can save to your account if you've registered.</StyledP>
                <StyledP>Displayed below is an example of a joke available to users.</StyledP>
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

export default PublicDashboard;