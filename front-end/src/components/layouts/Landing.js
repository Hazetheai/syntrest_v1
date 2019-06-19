/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../header/Header";
import Login from "../auth/Login";
import Register from "../auth/Register";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <Header />

        <section
          className="signupOrLogin"
          css={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Link to="/login">Login</Link>
          <Login />
          <Link to="/register">Register</Link>
          <Register />
        </section>
      </div>
    );
  }
}
