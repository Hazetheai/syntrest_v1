/** @jsx jsx */

import { Component } from "react";
import { jsx } from "@emotion/core";
import { Link } from "react-router-dom";

import { Button } from "../buttons/Button";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(userData);
  };

  render() {
    const { errors } = this.state;
    return (
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
        {...this.props}
      >
        <Button text="Back to home">
          <Link to="/" />
        </Button>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
        <h2>Login</h2>

        <form noValidate onSubmit={this.onSubmit}>
          <label htmlFor="email">Email</label>

          <input
            onChange={this.onChange}
            value={this.state.email}
            error={errors.email}
            type="email"
            name="login"
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
          <label htmlFor="password">Password</label>

          <input
            onChange={this.onChange}
            value={this.state.password}
            error={errors.password}
            type="password"
            name="login"
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
          <Button text="Login" />
        </form>
      </div>
    );
  }
}
