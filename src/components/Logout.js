import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "reactstrap";

class Logout extends Component {
  state = {
    navigate: false
  };

  logout = () => {
    localStorage.removeItem("token");
    this.setState({ navigate: true });
  };

  render() {
    const { navigate } = this.state;

    if (navigate) {
      return <Redirect to="/" push={true} />;
    }

    return (
      <Button className="links" onClick={this.logout}>
        Logout
      </Button>
    );
  }
}

export default Logout;
