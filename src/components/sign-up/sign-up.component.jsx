import React from 'react';

import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  handleChange = (event) => {
    const {value, name} = event.target;
    this.setState({[name]: value});
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const {displayName, email, password, confirmPassword} = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      createUserProfileDocument(user, {displayName});
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const {displayName, email, password, confirmPassword} = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            handleChange={this.handleChange}
            type="text"
            label="Display Name"
            value={displayName}
            required
          />
          <FormInput
            name="email"
            handleChange={this.handleChange}
            type="email"
            label="Email"
            value={email}
            required
          />
          <FormInput
            name="password"
            handleChange={this.handleChange}
            type="password"
            label="Password"
            value={password}
            required
          />
          <FormInput
            name="confirmPassword"
            handleChange={this.handleChange}
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
