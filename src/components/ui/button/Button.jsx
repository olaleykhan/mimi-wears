import React from "react";
import "./Button.scss";

const Button = ({ children, behaviour, ...otherProps }) => {
  return (
    <>
      <button className={behaviour ? behaviour : "" + "button"} {...otherProps}>
        {children}
      </button>
    </>
  );
};

export default Button;
