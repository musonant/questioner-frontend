import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import PropTypes from 'prop-types';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  validator = new SimpleReactValidator({
    element: message => <div>{message}</div>,
  });

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  formSubmitHandler = e => {
    e.preventDefault();
    this.validator.showMessages();
    this.setState({
      ...this.state,
    });

    if (!this.validator.allValid()) {
      return false;
    }

    const credentials = {
      email: this.state.email,
      password: this.state.password,
    };
  };

  render() {
    const { loginStatus } = this.props;

    return (
      <form
        onSubmit={this.formSubmitHandler}
        id="signin-form"
        className={`form ${loginStatus}`}
      >
        <input
          type="text"
          name="email"
          placeholder="email"
          value={this.state.email}
          onChange={this.onChange}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          placeholder="password"
          onChange={this.onChange}
        />
        <div className="err-msg">
          {this.validator.message('email', this.state.email, 'required|email')}
          {this.validator.message(
            'password',
            this.state.password,
            'required|min:6',
          )}
        </div>
        <input type="submit" value="Login" />
      </form>
    );
  }
}

LoginForm.propTypes = {
  loginStatus: PropTypes.string.isRequired,
};

export default LoginForm;
