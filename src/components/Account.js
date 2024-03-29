import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/Account.module.css";
export default function Account() {
  const { currentUser, logOut } = useAuth();
  return (
    <div className={classes.account}>
      {currentUser ? (
        <>
          <span>{currentUser.displayName}</span>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={logOut}
          >
            {" "}
            logout{" "}
          </span>{" "}
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}
