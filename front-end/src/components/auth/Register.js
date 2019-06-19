/** @jsx jsx */

import { Component } from "react";
import { Link } from "react-router-dom";
import { jsx } from "@emotion/core";

import { Button } from "../buttons/Button";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    console.log(newUser);
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
        <div>
          <Button text="Back to home">
            <Link to="/" />
          </Button>
          <h2>Sign up!</h2>
          <h3>Delicious data... Nom nom nom.</h3>
          <p>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
        <form noValidate onSubmit={this.onSubmit}>
          <label htmlFor="name">Name</label>
          <input
            onChange={this.onChange}
            value={this.state.name}
            error={errors.name}
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
          <label htmlFor="email">Email</label>

          <input
            onChange={this.onChange}
            value={this.state.email}
            error={errors.email}
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
          <label htmlFor="password">Password</label>

          <input
            onChange={this.onChange}
            value={this.state.password}
            error={errors.password}
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
          <label htmlFor="password2">Confirm password</label>

          <input
            onChange={this.onChange}
            value={this.state.password2}
            error={errors.password2}
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
          <Button type="submit" text="Sign up" />
        </form>
      </div>
    );
  }
}
