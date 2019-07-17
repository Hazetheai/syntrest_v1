/**@jsx jsx */

import { jsx } from "@emotion/core";
import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "../buttons/Button";
// const SERVER_URI = "localhost:5000";

class RecoverPassword extends Component {
  state = {
    email: "",
    submitted: false
  };

  handleChange = e => {
    this.setState({ email: e.target.value });
  };
  sendPasswordResetEmail = e => {
    e.preventDefault();
    const { email } = this.state;
    axios.post(`/reset_password/user/${email}`);
    this.setState({ email: "", submitted: true });
  };
  render() {
    const { email, submitted } = this.state;
    console.log(this.state.submitted);
    return (
      <div>
        <h3>Reset your password</h3>
        {submitted ? (
          <div>
            <p>
              If that account is in our system, we emailed you a link to reset
              your password.
            </p>
            <Link to="/login">Return to sign in</Link>
          </div>
        ) : (
          <div className="reset-password-form-wrapper">
            <p>
              It happens to the best of us. Enter your email and we'll send you
              reset instructions.
            </p>
            <form onSubmit={this.sendPasswordResetEmail}>
              <input
                onChange={this.handleChange}
                value={email}
                placeholder="Email address"
                css={{
                  width: "200px",
                  padding: "10px",
                  border: "2px solid #008F11",
                  margin: "5px",
                  borderRadius: "5px"
                }}
              />
              <Button text="Submit">Send password reset email</Button>
            </form>
            <Link to="/login">
              <Button text="I remember my password" />
            </Link>
          </div>
        )}
      </div>
    );
  }
}
export default RecoverPassword;
