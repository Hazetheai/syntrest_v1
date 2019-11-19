/** @jsx jsx */

import { jsx } from "@emotion/core";
import classnames from "classnames";
import PropTypes from "prop-types";
import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../../actions/authActions";
import { Button } from "../buttons/Button";

class DeleteAcc extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      confirmed: false,
      errors: {}
    };
  }

  componentDidMount() {
    // console.log("Mounted", this.props);
    // If logged in and user navigates to DeleteAcc page, should redirect them to dashboard
    if (!this.props.auth.isAuthenticated && this.props.history) {
      this.props.history.push("/login");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.auth.isAuthenticated || !this.props.auth.isAuthenticated) {
      this.props.history.push("/login"); // push user to profile when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
      console.log("this.state.errors", this.state.errors);
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email
    };
    this.props.deleteUser(userData);
    this.props.history.push("/register");
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
        </div>

        <h2>DeleteAcc</h2>
        <p>Are you suuuure you want to do this? </p>
        <br />

        <p> Cause if you are, well, we never loved you anyway...</p>
        <p>*Sniff*</p>
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
          <label htmlFor="email">Please enter you email to confirm</label>
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

          <Button type="submit" text="DeleteAcc" />
        </form>
      </div>
    );
  }
}

DeleteAcc.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  confirmed: PropTypes.bool
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  confirmed: state.confirmed
});
export default connect(mapStateToProps, { deleteUser })(DeleteAcc);
