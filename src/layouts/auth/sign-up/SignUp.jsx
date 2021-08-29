import React, { useState } from "react";
import FormInput from "../../../components/form-input/FormInput";
import Button from "../../../components/ui/button/Button";
import "./SignUp.scss";
import {
  auth,
  createUserProfileDocument,
} from "../../../firebase/firebase.utils";

const SignUp = () => {

  const [userData, setUserData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


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
        setUserData({
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

  return (
    <div className="sign-up">
      <h2> Sign up if you don't have an account</h2>
      <p>Please fill in your details below</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          placeholder="Please input your full name"
          value={displayName}
          required
          handleChange={handleChange}
          label="full Name"
        />
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
          placeholder="Please input your password"
          value={password}
          required
          handleChange={handleChange}
          label="password"
        />
        <FormInput
          name="confirmPassword"
          type="password"
          placeholder="Please confirm your Password"
          value={confirmPassword}
          required
          handleChange={handleChange}
          label="confirm password"
        />

        <div className="submit-btns">
          <Button type="submit"> Submit </Button>
        </div>
      </form>
    </div>
  );

}

export default SignUp;
