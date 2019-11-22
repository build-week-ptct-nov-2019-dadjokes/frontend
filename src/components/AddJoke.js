import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import logo from "./dadjokes.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { withFormik, Form, Field } from "formik";
import { postJokes } from "../actions/postAction";

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

function AddJoke({ history, values, errors, touched, status }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postJokes(status, history));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

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
          <Field
            type="checkbox"
            name="privateJoke"
            checked={values.privateJoke}
          />
          <button className="search-button" type="submit">
            Add Joke
          </button>
        </Form>
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

export default withFormik({
  mapPropsToValues: ({ joke, punchline, privateJoke }) => {
    return {
      joke: joke || "",
      punchline: punchline || "",
      privateJoke: privateJoke || false
    };
  },

  validationSchema: Yup.object().shape({
    joke: Yup.string()
      .min(10, "Your joke must be at least 10 characters long")
      .max(80, "The max limit is 80 characters")
      .required("You must make a joke header to submit"),
    punchline: Yup.string()
      .min(10, "Your joke must be at least 10 characters long")
      .max(80, "The max limit is 80 characters")
      .required("You must make a joke punchline to submit")
  }),

  handleSubmit(values, { setStatus }) {
    setStatus(values);
  }
})(AddJoke);
