import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle, auth} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (event) => {
    const {value, name} = event.target;
    this.setState({[name]: value});
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: '', password: ''});
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const {email, password} = this.state;
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
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
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
