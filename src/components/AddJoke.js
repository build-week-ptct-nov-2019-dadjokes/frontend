import React, { useEffect } from "react";
import logo from "./dadjokes.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { withFormik, Form, Field } from "formik";
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

function AddJoke({ values, errors, touched }) {
    return (
        <div>
            <StyledNav>
                <img alt="Logo" src={logo} className="img" />
                <Link to="/mywallet" className="links">My Wallet</Link>
                <Link to="/userdashboard" className="links">User Dashboard</Link>
                <Link to="/searchjokes" className="links">Search Jokes</Link>
            </StyledNav>
            <StyledSection>
                <h1>Welcome User!</h1>
                <StyledP>Here you can add a joke to your wallet, only you can see it!</StyledP>
                <Form>
                    <div>
                        {touched.joke && errors.joke && <p>{errors.joke}</p>}
                        <Field type="text" name="joke" placeholder="Joke Setup" />
                    </div>
                    <div>
                        {touched.punchline && errors.punchline && <p>{errors.punchline}</p>}
                        <Field type="text" name="punchline" placeholder="Joke Punchline" />
                    </div>
                    <label>Check for private</label>
                    <Field type="checkbox" name="privateJoke" checked={values.privateJoke} />
                    <button className="search-button" type="submit">Add Joke</button>
                </Form>
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

const FormikAddForm = withFormik({
    mapPropsToValues({ joke, punchline, privateJoke }) {
        return {
            joke: joke || "",
            punchline: punchline || "",
            privateJoke: privateJoke || false 
        }
    },

    validationSchema: Yup.object().shape({
        joke: Yup.string()
            .min(5, "Your joke must be at least 5 characters long")
            .max(50, "The max limit is 50 characters")
            .required("You must type in a joke header to submit"),
        punchline: Yup.string()
            .min(5, "Your joke must be at least 5 characters long")
            .max(50, "The max limit is 50 characters")
            .required("You must type in a joke header to submit"),
        
    }),

    handleSubmit(values) {
            axios
                .post("https://lambda-dad-jokes.herokuapp.com/api/jokes", values)
                .then(res => {
                    console.log(res);
                })
                .catch(error => {
                    console.log(error);
                })
    }
})(AddJoke);

export default FormikAddForm;