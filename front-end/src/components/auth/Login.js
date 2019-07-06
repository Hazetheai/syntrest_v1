/** @jsx jsx */

import { jsx } from "@emotion/core";
import classnames from "classnames";
import PropTypes from "prop-types";
import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../actions/authActions";
import { Button } from "../buttons/Button";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    console.log("Mounted", this.props);
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated && this.props.history) {
      this.props.history.push("/profile");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/profile"); // push user to profile when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
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

    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
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
      >
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Link to="/home">
            <Button text="Back to home" />
          </Link>
          <p>Don't have an account? </p>
          <Link to="/register">
            <Button text="Register"> </Button>
          </Link>
        </div>

        <h2>Login</h2>

        <form noValidate onSubmit={this.onSubmit}>
          <label htmlFor="email">Email</label>
          {/* <span className="red-text">
            {errors.email}
            {errors.emailnotfound}
          </span> */}
          <input
            onChange={this.onChange}
            value={this.state.email}
            error={errors.email}
            type="email"
            name="login"
            inputMode="email"
            placeholder="email address"
            id="email"
            className={classnames("", {
              invalid: errors.email || errors.emailnotfound
            })}
            css={{
              width: "200px",
              padding: "10px",
              border: "2px solid #008F11",
              margin: "5px",
              borderRadius: "5px"
            }}
          />
          <label htmlFor="password">Password</label>
          {/* <span className="red-text">
            {errors.password}
            {errors.passwordincorrect}
          </span> */}

          <input
            onChange={this.onChange}
            value={this.state.password}
            error={errors.password}
            type="password"
            name="login"
            id="password"
            className={classnames("", {
              invalid: errors.password || errors.passwordincorrect
            })}
            css={{
              width: "200px",
              padding: "10px",
              border: "2px solid #008F11",
              margin: "5px",
              borderRadius: "5px"
            }}
          />
          <Button type="submit" text="Login" />
          <div>
            {/* TODO ==> ADD An unguessable random string. It is used to protect against cross-site request forgery attacks. */}
            <a
              href={`https://github.com/login/oauth/authorize?client_id=${
                process.env.REACT_APP_GITHUB_CLIENT_ID
              }`}
            >
              GITHUB
            </a>
          </div>
          <Link to="/password/recover">
            <p>Forgot your password? </p>
          </Link>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
