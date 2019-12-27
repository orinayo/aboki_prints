import React from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { SignUpContainer, SignUpTitle } from "./sign-up.styles";
import userActions from "../../redux/user/user.actions";

class SignUp extends React.Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    signUpStart({ displayName, email, password });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignUpContainer>
        <SignUpTitle>I do not have an account</SignUpTitle>
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
      </SignUpContainer>
    );
  }
}

const { signUpStart } = userActions;
export default connect(null, { signUpStart })(SignUp);
