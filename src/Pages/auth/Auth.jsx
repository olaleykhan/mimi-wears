import React from "react";
import SignIn from "../../layouts/auth/sign-in/SignIn";
import SignUp from "../../layouts/auth/sign-up/SignUp";
import "./Auth.scss";

const Auth = () => {
  return (
    <div className="auth">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
