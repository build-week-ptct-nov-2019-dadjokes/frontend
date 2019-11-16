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

function SearchJokes({ errors, touched }) {
    return(
        <div>
            <StyledNav>
                <img alt="Logo" src={logo} className="img" />
                <Link to="/mywallet" className="links">My Wallet</Link>
                <Link to="/userdashboard" className="links">User Dashboard</Link>
                <Link to="/addjoke" className="links">Add Joke</Link>
            </StyledNav>
            <StyledSection>
                <h1>Welcome User!</h1>
                <StyledP>Here you can search for a joke using keywords</StyledP>
                <Form>
                    <div>
                        {touched.name && errors.name && <p>{errors.name}</p>}
                        <Field type="text" name="name" placeholder="Joke keyword" />
                    </div>
                    <button className="search-button" type="submit">Submit Search</button>
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

const FormikSearchForm = withFormik({
    mapPropsToValues({ name }) {
        return {
            name: name || ""
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string()
            .min(3, "Three characters are the minimum you must search with")
            .required("Joke keyword is required")
    }),

    handleSubmit(values) {
        console.log(values);
    }
})(SearchJokes);



export default FormikSearchForm;