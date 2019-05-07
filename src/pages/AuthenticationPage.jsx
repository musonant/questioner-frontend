import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/authentication/LoginForm';
import SignupForm from '../components/authentication/SignupForm';

class AuthenticationPage extends Component {
  state = {};

  render() {
    const loginStatus =
      this.props.location.pathname === '/login' ? 'active' : '';
    const signupStatus =
      this.props.location.pathname === '/signup' ? 'active' : '';
    return (
      <div>
        <Header />

        <div className="sign-container">
          <div className="sign-toggle row" id="sign-toggle">
            <Link to="/login" className={`bar in col-sm-6 ${loginStatus}`}>
              Log in
            </Link>
            <Link to="/signup" className={`bar up col-sm-6 ${signupStatus}`}>
              Register
            </Link>
          </div>
          <div className="form-area">
            <form action="" id="signin-form" className={`form ${loginStatus}`}>
              <LoginForm />
            </form>
            <form action="" id="signup-form" className={`form ${signupStatus}`}>
              <SignupForm />
            </form>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default AuthenticationPage;
