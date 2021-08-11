import React, { Component } from "react";

import { auth, signInWithGoogle } from "../../../firebase/firebase.utils";

import FormInput from "../../../components/form-input/FormInput";
import Button from "../../../components/ui/button/Button";
import "./SignIn.scss";

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error.message);
    }
  };
  render() {
    return (
      <div className="sign-in">
        <h2> I already have an account </h2>
        <span> fill in your details below </span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            placeholder="Please input your email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label="email"
          />

          <FormInput
            name="password"
            type="password"
            placeholder="input password"
            value={this.state.password}
            required
            onChange={this.handleChange}
            label="password"
          />
          <div className="submit-btns">
            <Button type="submit"> Submit </Button>
            <Button type="button" behaviour="google" onClick={signInWithGoogle}>
              Signin With Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
