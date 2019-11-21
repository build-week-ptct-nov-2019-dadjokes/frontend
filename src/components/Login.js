import React, { Component } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth as axios } from "../utils/axiosConfig";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {}
    };
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    axios()
      .post("/api/auth/login", userData)
      .then(res => console.log(res))
      .catch(err => console.log(err.response));
    console.log(userData);
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div
          style={{
            marginTop: "-9rem",
            marginLeft: "1200px",
            width: "600px",
            paddingTop: "30px",
            display: "flex"
          }}
          className="row"
        >
          <div className="col s8 offset-s2">
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <p>Login</p>
              </h4>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div
                className="input-field col s12"
                style={{ paddingBottom: "5px" }}
              >
                <input
                  style={{
                    borderRadius: "10px",
                    width: "220px",
                    display: "inlineblock",
                    paddingLeft: "8px",
                    marginRight: "7px"
                  }}
                  placeholder="Username..."
                  onChange={this.onChange}
                  value={this.state.username}
                  error={errors.userData}
                  id="username"
                  type="username"
                />
                <label htmlFor="username" />
                <input
                  style={{
                    borderRadius: "10px",
                    width: "220px",
                    display: "inlineblock",
                    paddingLeft: "8px"
                  }}
                  placeholder="Password..."
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                />
                <label htmlFor="password" />
              </div>
              <div
                className="col s12"
                style={{ marginRight: "0", marginTop: "8px" }}
              >
                <button
                  style={{
                    borderColor: "black",
                    width: "150px",
                    borderRadius: "10px",
                    letterSpacing: "1.5px",
                    marginTop: "-1rem",
                    padding: "1px",
                    background: "#EF7D43",
                    color: "white"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Submit
                </button>
                <p
                  className="grey-text text-darken-1"
                  style={{ marginBottom: "-5px" }}
                >
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
