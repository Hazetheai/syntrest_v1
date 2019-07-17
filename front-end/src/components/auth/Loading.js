/** @jsx jsx */

import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginOAuth } from "../../actions/OAuthActions";

class Loading extends Component {
  constructor() {
    super();

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props.loginOAuth(this.props.accessToken);
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated && this.props.history) {
      this.props.history.push("/profile");
    }
    console.log("this.props.history", this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps);
    console.log("this.props", this.props);
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/profile"); // push user to profile when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.loginOAuth(this.props.accessToken);
  };

  render() {
    return (
      <div
        css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h2>Loading</h2>
        <button onClick={this.onSubmit}>Continue</button>
      </div>
    );
  }
}

Loading.propTypes = {
  accessToken: PropTypes.string.isRequired,
  loginOAuth: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default withRouter(
  connect(
    mapStateToProps,
    { loginOAuth }
  )(Loading)
);
