/** @jsx jsx */

import { jsx } from "@emotion/core";
import classnames from "classnames";
import PropTypes from "prop-types";
import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../actions/authActions";
import { resendConfirm } from "../../actions/authActions";
import { Button } from "../buttons/Button";
import GithubBtn from "../buttons/GithubBtn";
import RedditBtn from "../buttons/RedditBtn";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      confirmed: false,
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated && this.props.history) {
      this.props.history.push("/profile");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated || this.props.auth.isAuthenticated) {
      this.props.history.push("/profile");
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  handleEmailConfirmNotSent = e => {
    e.preventDefault();
    this.props.resendConfirm(this.state.email);
  };
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;
    return (
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "25rem",
          backgroundColor: "#fff",
          margin: "auto",
          marginTop: "4rem",
          padding: "3rem",
          borderRadius: "5px"
        }}
      >
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
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

        <form
          noValidate
          onSubmit={this.onSubmit}
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "2rem"
          }}
        >
          <label htmlFor="email">Email</label>
          <span className="red-text">
            {errors.email}
            {errors.emailnotfound}
          </span>
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
          <span className="red-text">
            {errors.password}
            {errors.passwordincorrect}
            {errors.emailnotconfirmed}
          </span>

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
          {errors.emailnotconfirmed ? (
            <button type="button" onClick={this.handleEmailConfirmNotSent}>
              Didn't get an email
            </button>
          ) : (
            <Button type="submit" text="Login" />
          )}

          <Link to="/password/recover">
            <p>Forgot your password? </p>
          </Link>
        </form>
        <div>
          {/* TODO ==> ADD An unguessable random string. It is used to protect against cross-site request forgery attacks. */}
          <a
            href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`}
          >
            <GithubBtn text="Github">
              <i class="fab fa-github" />{" "}
            </GithubBtn>
          </a>

          {/* /api/v1/authorize.compact? **TODO** Use this on smaller screens */}

          <a
            href={`https://www.reddit.com/api/v1/authorize?api_key&client_id=${process.env.REACT_APP_REDDIT_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDDIT_CALLBACK_URL}&response_type=code&scope=identity&state=PUT_ANY_STRING_HERE
`}
          >
            <RedditBtn text="Reddit">
              <i class="fab fa-reddit" />{" "}
            </RedditBtn>
          </a>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  resendConfirm: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, { loginUser, resendConfirm })(Login);
