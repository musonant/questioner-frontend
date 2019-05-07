import React from 'react';

const SignupForm = () => {
  return (
    <div>
      <input type="text" placeholder="first name" name="firstname" />
      <input type="text" placeholder="last name" name="lastname" />
      <input type="text" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <input
        type="password"
        placeholder="confirm password"
        name="confirmPassword"
      />
      <input type="submit" value="Register" />
    </div>
  );
};

export default SignupForm;
