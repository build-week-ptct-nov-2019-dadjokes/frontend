import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../index.css";
import logo from "./dadjokes.png";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

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

const StyledName = styled.p`
    color: #A64000;
    font-size: 3rem;
    font-family: Georgia, serif;
`;

const StyledNav = styled.nav`

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    border-bottom: 1px solid black;
    background-color: #008B8B;
    padding-bottom: 0.5rem;

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


function PublicDashboard() {  
    
    return(
        <div>
            <StyledNav>
                <StyledName>Dad Jokes</StyledName>
                <img src={logo} className="img" alt="Logo" />
                <Link className="links" to="/login">Login</Link>
                <Link className="links" to="/register">Register</Link>
            </StyledNav>
            <StyledSection>
                <h1>Welcome to Dad Jokes! </h1>
                <StyledP>This is an app dedicated to all of the people out there who enjoy good (or bad) dad jokes.</StyledP>
                <StyledP>Some of our features include viewing public jokes open to everyone, to private jokes you can save to your account if you've registered.</StyledP>
                <StyledP>Displayed below are some of the public jokes available.</StyledP>
                <JokeCard />
            </StyledSection>
        </div>
        
    )
}

export default PublicDashboard;