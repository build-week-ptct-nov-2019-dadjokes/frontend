import React, { Component } from "react";
import {
  Button,
  Modal,
  Nav,
  NavItem,
  Row,
  Col,
  FormGroup
} from "react-bootstrap";
import axios from "axios";
import { Cookies } from "react-cookie";

export default class Register extends Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.render.bind(this);
    this.state = { showModal: false };
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  handleFirstNameChange(e) {
    this.setState({ firstName: e.target.value });
  }

  handleLastNameChange(e) {
    this.setState({ lastName: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  signUp() {
    console.log(this);
    var that = this;
    axios
      .post("https://api.tech/users", {
        user: {
          email: this.state.email,
          password: this.state.password
        }
      })
      .then(function(response) {
        console.log(response);
        var userInfo = {
          id: response.data.data.id,
          token: response.data.data.attributes["auth-token"]
        };
        Cookies.save("user", userInfo);
        axios({
          method: "put",
          url: "https://api.tech/users/" + response.data.data.id,
          headers: {
            Authorization: response.data.data.attributes["auth-token"]
          },
          data: {
            user: {
              first_name: that.state.firstName,
              last_name: that.state.lastName
            }
          }
        });
        that.setState({ showModal: false });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleSelect(event) {
    event.preventDefault();
    alert(`selected ${event}`);
  }
  render() {
    return (
      <div>
        <span onClick={this.open.bind(this)}>Sign Up</span>

        <Modal
          show={this.state.showModal}
          onHide={this.close.bind(this)}
          className="modal-wrapper signup-modal"
        >
          <Modal.Body>
            <Nav
              bsStyle="pills"
              activeKey={this.eventKey}
              onSelect={this.handleSelect}
            >
              <NavItem eventKey={2} title="Item">
                <span className="login-nav-tab">Sign Up</span>
              </NavItem>
            </Nav>
            <form>
              <FormGroup>
                <input
                  value={this.state.firstName}
                  onChange={this.handleFirstNameChange}
                  className="form-control"
                  placeholder="First Name"
                />
              </FormGroup>
              <FormGroup>
                <input
                  value={this.state.lastName}
                  onChange={this.handleLastNameChange}
                  className="form-control"
                  placeholder="Last Name"
                />
              </FormGroup>
              <FormGroup>
                <input
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  className="form-control"
                  placeholder="Email"
                />
              </FormGroup>
              <FormGroup>
                <input
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  className="form-control"
                  placeholder="Password"
                />
              </FormGroup>
              <Row>
                <Col md={12}>
                  <p className="term-conditions">
                    By signing up, I agree to the{" "}
                    <a href="javascript:void(0);">Terms of Service</a> and{" "}
                    <a href="javascript:void(0);">Privacy Policy</a>
                  </p>
                </Col>
                <Col md={12}>
                  <Button
                    onClick={this.signUp.bind(this)}
                    className="btn btn-black btn-block"
                  >
                    Sign Up
                  </Button>
                </Col>
              </Row>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-black" onClick={this.close.bind(this)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
