import React, { Component } from "react";
import FormInput from "../../../components/form-input/FormInput";
import Button from "../../../components/ui/button/Button";
import "./SignUp.scss";
import {
  auth,
  createUserProfileDocument,
} from "../../../firebase/firebase.utils";

export class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password and Confirm password should match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName }).then(() => {
        this.setState({
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      });
    } catch (err) {
      console.log("[signup catch error] = ", err);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2> Sign up if you don't have an account</h2>
        <p>Please fill in your details below</p>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            placeholder="Please input your full name"
            value={displayName}
            required
            handleChange={this.handleChange}
            label="full Name"
          />
          <FormInput
            name="email"
            type="email"
            placeholder="Please input your email"
            value={email}
            required
            handleChange={this.handleChange}
            label="email"
          />
          <FormInput
            name="password"
            type="password"
            placeholder="Please input your password"
            value={password}
            required
            handleChange={this.handleChange}
            label="password"
          />
          <FormInput
            name="confirmPassword"
            type="password"
            placeholder="Please confirm your Password"
            value={confirmPassword}
            required
            handleChange={this.handleChange}
            label="confirm password"
          />

          <div className="submit-btns">
            <Button type="submit"> Submit </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
