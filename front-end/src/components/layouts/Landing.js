/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Component } from "react";
import Login from "../auth/Login";
import Header from "../header/Header";

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
          <Login />
        </section>
      </div>
    );
  }
}
