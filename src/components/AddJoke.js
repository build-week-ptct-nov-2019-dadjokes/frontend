import React from "react";
import logo from "./dadjokes.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { withFormik, Form, Field } from "formik";

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

function AddJoke({ errors, touched }) {
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
                        {touched.name && errors.name && <p>{errors.name}</p>}
                        <Field type="text" name="name" placeholder="Joke" />
                    </div>
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
    mapPropsToValues({ name }) {
        return {
            name: name || ""
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string()
            .min(20, "Your joke must be at least 20 characters long")
            .max(400, "The max limit is 400 characters")
            .required("You must type in a joke to submit")
    }),

    handleSubmit(values) {
        console.log(values);
    }
})(AddJoke);

export default FormikAddForm;