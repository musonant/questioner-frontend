import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';

class SignupForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  validator = new SimpleReactValidator({
    element: message => <div>{message}</div>,
    messages: {
      in: "The passwords don't match."
    }
  });

  onChange = e => {
    this.validator.showMessages();

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    if (!this.validator.allValid()) {
      return false;
    }

    const credentials = {
      email: this.state.email,
      password: this.state.password,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      confirmPassword: this.state.confirmPassword
    };
    console.log(credentials);
  };

  render() {
    const { signupStatus } = this.props;
    return (
      <form action="" id="signup-form" className={`form ${signupStatus}`}>
        <input
          type="text"
          placeholder="first name"
          name="firstname"
          value={this.state.firstname}
          onChange={this.onChange}
        />
        <input
          type="text"
          placeholder="last name"
          name="lastname"
          value={this.state.lastname}
          onChange={this.onChange}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          value={this.state.email}
          onChange={this.onChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={this.state.password}
          onChange={this.onChange}
        />
        <input
          type="password"
          placeholder="confirm password"
          name="confirmPassword"
          value={this.state.confirmPassword}
          onChange={this.onChange}
        />

        <div className="err-msg">
          {this.validator.message(
            'firstname',
            this.state.firstname,
            'required|alpha_space'
          )}
          {this.validator.message(
            'lastname',
            this.state.lastname,
            'required|alpha_space'
          )}
          {this.validator.message('email', this.state.email, 'required|email')}
          {this.validator.message(
            'password',
            this.state.password,
            'required|min:6'
          )}
          {this.validator.message(
            'confirmPassword',
            this.state.confirmPassword,
            `required|in:${this.state.password}`
          )}
        </div>

        <input type="submit" value="Register" />
      </form>
    );
  }
}

export default SignupForm;
