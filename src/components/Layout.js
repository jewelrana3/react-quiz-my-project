import React from "react";
import { Outlet } from "react-router-dom";
import classes from "../styles/Layout.module.css";
import Nav from "./Nav";
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>
          <Outlet></Outlet>
        </div>
      </main>
    </>
  );
}
