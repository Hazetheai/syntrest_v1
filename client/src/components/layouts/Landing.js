/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Component } from "react";
import Login from "../auth/Login";

export default class Landing extends Component {
  render() {
    return (
      <div>
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
