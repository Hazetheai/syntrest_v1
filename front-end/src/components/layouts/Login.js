/** @jsx jsx */

import { Component } from "react";
import { jsx } from "@emotion/core";

import { Button } from "../buttons/Button";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
        {...this.props}
      >
        <h2>Login</h2>

        <input
          type="email"
          name="login"
          inputMode="email"
          placeholder="email address"
          css={{
            width: "200px",
            padding: "10px",
            border: "2px solid #008F11",
            margin: "5px",
            borderRadius: "5px"
          }}
          {...this.props}
        />
        <input
          type="password"
          name="login"
          css={{
            width: "200px",
            padding: "10px",
            border: "2px solid #008F11",
            margin: "5px",
            borderRadius: "5px"
          }}
          {...this.props}
        />
        <Button text="Submit" />
      </div>
    );
  }
}
