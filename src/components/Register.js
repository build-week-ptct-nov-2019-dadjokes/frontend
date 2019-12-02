import React from "react";
import { useInput } from "../hooks/useInput";
import { axiosWithAuth as axios } from "../utils/axiosConfig";
import { Input, Label, Wrapper, Title, SubmitButton } from "./styled/index";

const Register = props => {
  const [username, handleUsername] = useInput("");
  const [email, handleEmail] = useInput("");
  const [password, handlePassword] = useInput("");

  const onSubmit = e => {
    e.preventDefault();
    let user = {
      username,
      email,
      password
    };
    console.log(user);
    axios()
      .post("/api/auth/register", user)
      .then(res => props.history.push("/login"))
      .catch(err => console.log(err));
  };

  return (
    <Wrapper>
      <Title>Drop Block Signup</Title>

      <form onSubmit={e => onSubmit(e)}>
        <Label>
          Username
          <Input
            type="username"
            name="username"
            value={username}
            onChange={e => handleUsername(e.target.value)}
            required
          />
        </Label>

        <Label>
          Email Address
          <Input
            label="Email Address"
            type="email"
            name="email"
            value={email}
            onChange={e => handleEmail(e.target.value)}
            required
          />
        </Label>

        <Label>
          Password (minimum 8 characters)
          <Input
            type="password"
            name="password"
            value={password}
            onChange={e => handlePassword(e.target.value)}
            required
          />
        </Label>

        <SubmitButton shadow>Sign up</SubmitButton>
      </form>
    </Wrapper>
  );
};

export default Register;
