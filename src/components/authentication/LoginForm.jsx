import React, { Component } from 'react';

class LoginForm extends Component {
  onChange(e) {
    console.log(e);
  }
  render() {
    return (
      <div>
        <input type="text" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <input type="submit" value="Login" />
      </div>
    );
  }
}

export default LoginForm;
