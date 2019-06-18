/** @jsx jsx */

import { Component } from "react";
import { jsx } from "@emotion/core";

import { Button } from "../buttons/Button";

export default class Signup extends Component {
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
        <h2>Sign up!</h2>
        <h3>Delicious data... Nom nom nom.</h3>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="signup"
          placeholder="your name"
          id="name"
          css={{
            width: "200px",
            padding: "10px",
            border: "2px solid #008F11",
            margin: "5px",
            borderRadius: "5px"
          }}
          {...this.props}
        />
        <label htmlFor="email">Name</label>

        <input
          type="email"
          name="signup"
          inputMode="email"
          placeholder="email address"
          id="email"
          css={{
            width: "200px",

            padding: "10px",
            border: "2px solid #008F11",
            margin: "5px",
            borderRadius: "5px"
          }}
          {...this.props}
        />
        <label htmlFor="password">Name</label>

        <input
          type="password"
          name="signup"
          id="password"
          css={{
            width: "200px",

            padding: "10px",
            border: "2px solid #008F11",
            margin: "5px",
            borderRadius: "5px"
          }}
          {...this.props}
        />
        <label htmlFor="passwordConfirmation">Name</label>

        <input
          type="password"
          name="signup"
          id="password2"
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
