import React, { useState } from 'react';
import { auth, signInWithGoogle } from "../../../firebase/firebase.utils";

import FormInput from "../../../components/form-input/FormInput";
import Button from "../../../components/ui/button/Button";
import "./SignIn.scss";



const SignIn = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUserData({ ...userData, email: "", password: "" });
    } catch (error) {
      console.log(error.message);
    }
  };



  return (
    <div className="sign-in">
      <h2> I already have an account </h2>
      <span> fill in your details below </span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          placeholder="Please input your email"
          value={email}
          required
          handleChange={handleChange}
          label="email"
        />

        <FormInput
          name="password"
          type="password"
          placeholder="input password"
          value={password}
          required
          onChange={handleChange}
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

export default SignIn


