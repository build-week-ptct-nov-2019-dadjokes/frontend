import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./dadjokes.png";
import JokeCard from "./JokeCard";
import axios from "axios";

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


const StyledNav = styled.nav`

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    background-color: white;
    padding-bottom: 0.5rem;

`;





function MyWallet() {
    const [all, setAll] = useState([]);
    
    useEffect(() => {
        axios
            .get("https://lambda-dad-jokes.herokuapp.com/api/jokes/public")
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    
    return(
        <div>
            <StyledNav>
                <img alt="Logo" src={logo} className="img" />
                <Link to="/userdashboard" className="links">User Dashboard</Link>
                <Link to="/searchjokes" className="links">Search Jokes</Link>
                <Link to="/addjoke" className="links">Add Joke</Link>
                
            </StyledNav>
            <StyledSection>
                <h1>Welcome User!</h1>
                <StyledP>Here you can find all of your private jokes submitted to your account.</StyledP>
                <StyledP>Test joke displayed below</StyledP>
                
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

export default MyWallet;