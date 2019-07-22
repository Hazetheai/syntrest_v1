/** @jsx jsx */

import { jsx } from "@emotion/core";
import classnames from "classnames";
import PropTypes from "prop-types";
import { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { registerUser } from "../../actions/authActions";
import { Button } from "../buttons/Button";
import GithubBtn from "../buttons/GithubBtn";
import RedditBtn from "../buttons/RedditBtn";

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

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
  }

  // Update to getDerivedStateFromProps once functionality is established
  componentWillReceiveProps(nextProps) {
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
          alignItems: "center",
          width: "25rem",
          backgroundColor: "#fff",
          margin: "auto",
          marginTop: "4rem",
          padding: "3rem",
          borderRadius: "5px"
        }}
      >
        <div css={{}}>
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
            <p>Already have an account? </p>
            <Link to="/login">
              <Button text="Login"> </Button>
            </Link>
          </div>
          <h2>Sign up!</h2>
          <h3>Delicious data... Nom nom nom.</h3>
        </div>
        <form
          noValidate
          onSubmit={this.onSubmit}
          css={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            margin: "2rem"
          }}
        >
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
          />
          <Button type="submit" text="Sign up" />
        </form>
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${
            process.env.REACT_APP_GITHUB_CLIENT_ID
          }`}
        >
          <GithubBtn text="Github">
            <i class="fab fa-github" />{" "}
          </GithubBtn>
        </a>

        {/* /api/v1/authorize.compact? **TODO** Use this on smaller screens */}

        <a
          href={`https://www.reddit.com/api/v1/authorize?api_key&client_id=${
            process.env.REACT_APP_REDDIT_CLIENT_ID
          }&redirect_uri=${
            process.env.REACT_APP_REDDIT_CALLBACK_URL
          }&response_type=code&scope=identity&state=PUT_ANY_STRING_HERE
`}
        >
          <RedditBtn text="Reddit">
            <i class="fab fa-reddit" />{" "}
          </RedditBtn>
        </a>
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
