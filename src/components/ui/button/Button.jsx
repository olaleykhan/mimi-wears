import React from "react";
import "./Button.scss";

const Button = ({ children, behaviour, ...otherProps }) => {
  return (
    <>
      <button
        className={`button ${behaviour ? behaviour : null}`}
        {...otherProps}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
