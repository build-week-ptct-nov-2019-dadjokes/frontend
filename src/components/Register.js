import React from 'react';
import { Input, Label, Button, Wrapper, Title, SubmitButton } from './styled/index';


export default class Register extends React.Component {
  constructor() {
    
    super();

    this.state = {
      hasValidEmail: true,
      hasSignedUp: false,
      hasValidPassword: true,
      
    };
  }

  componentDidMount() {
//         this.emailInput.focus();
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    
  }

  onBlur = evt => {
    const isValidInput = this.validateInput(evt.target);
    const inputType = evt.target.type;
    
    if (inputType === 'email') {
      this.setState({hasValidEmail: isValidInput});
    } else if (inputType === 'password') {
      this.setState({hasValidPassword: isValidInput});
    }
  }
  
  onSubmit = evt => {
    const { hasValidEmail, hasValidPassword } = this.state;
    
    evt.preventDefault();
  }
  
  validateInput = input => {
    const type = input.type;
    let hasValidEmail = this.state.hasValidEmail;
    let hasValidPassword = this.state.hasValidPassword;
    
    return input.validity.valid
  }
  

  render() {
    var self = this;
    return (
      <Wrapper>
        <Title>Drop Block Signup</Title>

        <form onSubmit={this.onSubmit}>
          <Label>
            Username
            <Input             
              type="username"
              pattern="[a-zA-Z]$"
              onBlur={this.onBlur}
              required
            />
          </Label>
          
          <Label>
            Email Address
            
            <Input
              className={`${!this.state.hasValidEmail ? 'invalid' : ''}`}
              innerRef={function(input) { return self.emailInput = input}}
              label="Email Address"
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
              onBlur={this.onBlur}
              required
            />
          </Label>

          <Label>
            Password (minimum 8 characters)
            
            <Input
              className={`${!this.state.hasValidPassword ? 'invalid' : ''}`}
              innerRef={input => this.passwordInput = input}
              onBlur={this.onBlur}
              pattern="^[0-9a-zA-Z]{8,}$"
              type="password"
              required
            />
          </Label>

          <SubmitButton onSubmit={this.onSubmit} shadow>
            Sign up
          </SubmitButton>
        </form>
      </Wrapper>
    );
  }
}
