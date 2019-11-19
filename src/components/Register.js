import React, { useState } from "react";
import {
  FormGroup,
  FormControl,
  FormLabel
} from "react-bootstrap";
import LoaderButton from "./LoaderButton";
import { useFormFields } from './libs/hookLibs';


export default function Register(props) {
  const [fields, handleFieldChange] = useFormFields({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    confirmationCode: ""
  });
  const [newUser, setNewUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return (
      fields.firstname.length > 0 &&
      fields.lastname.length > 0 &&
      fields.username.length > 0 &&
      fields.email.length > 0 &&
      fields.password.length > 0 &&
      fields.password === fields.confirmPassword
    );
  }

  function validateConfirmationForm() {
    return fields.confirmationCode.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    setNewUser("test");

    setIsLoading(false);
  }

  async function handleConfirmationSubmit(event) {
    event.preventDefault();

    setIsLoading(true);
  }

  function renderConfirmationForm() {
    return (
      <form onSubmit={handleConfirmationSubmit}>
        <FormGroup controlId="confirmationCode" bsSize="large">
          <FormLabel>Confirmation Code</FormLabel>
          <FormControl
            autoFocus
            type="tel"
            onChange={handleFieldChange}
            value={fields.confirmationCode}
          />
        </FormGroup>
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          isLoading={isLoading}
          disabled={!validateConfirmationForm()}
        >
          Verify
        </LoaderButton>
      </form>
    );
  }

  function renderForm() {
    return (
      <form onSubmit={handleSubmit} className="regInfo">
        <FormGroup controlId="firstname" bsSize="large">
          <FormLabel>First Name</FormLabel>
          <FormControl
            autoFocus
            type="firstname"
            value={fields.firstname}
            onChange={handleFieldChange}
          />
          </FormGroup>
          <FormGroup controlId="lastname" bsSize="large">
          <FormLabel>Last Name</FormLabel>
          <FormControl
            autoFocus
            type="lastname"
            value={fields.lastname}
            onChange={handleFieldChange}
          />
          </FormGroup>
          <FormGroup controlId="username" bsSize="large">
          <FormLabel>Username</FormLabel>
          <FormControl
            autoFocus
            type="username"
            value={fields.username}
            onChange={handleFieldChange}
          />
          </FormGroup>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="confirmPassword" bsSize="large">
          <FormLabel>Confirm Password</FormLabel>
          <FormControl
            type="password"
            onChange={handleFieldChange}
            value={fields.confirmPassword}
          />
        </FormGroup>
        <LoaderButton style={{background: "#0E0E40", border: "#0E0E40" }}
          block
          type="submit"
          bsSize="large"
          isLoading={isLoading}
          disabled={!validateForm()}>
          Signup
        </LoaderButton>
      </form>
    );
  }

  return (
    <div className="register">
      {newUser === null ? renderForm() : renderConfirmationForm()}
    </div>
  );
}
