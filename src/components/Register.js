/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
// @ts-nocheck
import React, { Component } from "react";
import { axiosWithAuth as axios } from "../utils/axiosConfig";
import {
  Button,
  Modal,
  Nav,
  NavItem,
  Row,
  Col,
  FormGroup
} from "react-bootstrap";

export default class Register extends Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.render.bind(this);
    this.state = { showModal: false };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  signUp() {
    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    axios()
      .post("/api/auth/register", user)
      .then(res => this.props.history.push("/login"))
      .catch(err => console.log(err.response));
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
                  value={this.state.username}
                  onChange={this.handleUsernameChange}
                  className="form-control"
                  placeholder="Username"
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
