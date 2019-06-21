/** @jsx jsx */

import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import { jsx } from "@emotion/core";

import { Button } from "../buttons/Button";

class Register extends Component {
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
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
    // console.log(newUser);
    this.props.registerUser(newUser, this.props.history);
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
          <span className="red-text">{errors.name}</span>

          <input
            onChange={this.onChange}
            value={this.state.name}
            error={errors.name}
            type="text"
            name="signup"
            placeholder="your name"
            id="name"
            className={classnames("", {
              invalid: errors.name
            })}
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
          <span className="red-text">{errors.email}</span>

          <input
            onChange={this.onChange}
            value={this.state.email}
            error={errors.email}
            type="email"
            name="signup"
            inputMode="email"
            placeholder="email address"
            id="email"
            className={classnames("", {
              invalid: errors.email
            })}
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
          <span className="red-text">{errors.password}</span>

          <input
            onChange={this.onChange}
            value={this.state.password}
            error={errors.password}
            type="password"
            name="signup"
            id="password"
            className={classnames("", {
              invalid: errors.password
            })}
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
          <span className="red-text">{errors.password2}</span>

          <input
            onChange={this.onChange}
            value={this.state.password2}
            error={errors.password2}
            type="password"
            name="signup"
            id="password2"
            className={classnames("", {
              invalid: errors.password2
            })}
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));