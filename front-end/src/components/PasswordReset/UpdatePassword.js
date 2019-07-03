/**@jsx jsx */

import { jsx } from "@emotion/core";
import axios from "axios";
import PropTypes from "prop-types";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "../buttons/Button";
const SERVER_URI = "localhost:5000";
class UpdatePassword extends Component {
  state = {
    password: "",
    confirmPassword: "",
    submitted: false
  };
  handleChange = key => e => {
    this.setState({ [key]: e.target.value });
  };
  updatePassword = e => {
    e.preventDefault();
    const { userId, token } = this.props;
    const { password } = this.state;
    axios
      .post(
        `${SERVER_URI}/reset_password/receive_new_password/${userId}/${token}`,
        { password }
      )
      .then(res => console.log("RESPONSE FROM SERVER TO CLIENT:", res))
      .catch(err => console.log("SERVER ERROR TO CLIENT:", err));
    this.setState({ submitted: !this.state.submitted });
  };
  render() {
    const { submitted } = this.state;
    return (
      <div>
        <h3 style={{ paddingBottom: "1.25rem" }}>Update your password</h3>
        {submitted ? (
          <div className="reset-password-form-sent-wrapper">
            <p>Your password has been saved.</p>
            <Link to="/login" className="ghost-btn">
              Sign back in
            </Link>
          </div>
        ) : (
          <div className="reset-password-form-wrapper">
            <form
              onSubmit={this.updatePassword}
              style={{ paddingBottom: "1.5rem" }}
            >
              <input
                onChange={this.handleChange("password")}
                value={this.state.password}
                placeholder="New password"
                type="password"
                css={{
                  width: "200px",
                  padding: "10px",
                  border: "2px solid #008F11",
                  margin: "5px",
                  borderRadius: "5px"
                }}
              />
              <input
                onChange={this.handleChange("confirmPassword")}
                value={this.state.confirmPassword}
                placeholder="Confirm password"
                type="password"
                css={{
                  width: "200px",
                  padding: "10px",
                  border: "2px solid #008F11",
                  margin: "5px",
                  borderRadius: "5px"
                }}
              />
              <Button
                text="Update Password"
                className="btn-primary password-reset-btn"
              >
                Update password
              </Button>
            </form>
          </div>
        )}
      </div>
    );
  }
}
UpdatePassword.propTypes = {
  token: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired
};
export default UpdatePassword;
