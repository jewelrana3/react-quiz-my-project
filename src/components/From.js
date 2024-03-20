import React from "react";
import classes from "../styles/From.module.css";
export default function From({ children, className, ...rest }) {
  return (
    <div>
      <form className={`${className} ${classes.form}`} action="#" {...rest}>
        {children}
      </form>
    </div>
  );
}
