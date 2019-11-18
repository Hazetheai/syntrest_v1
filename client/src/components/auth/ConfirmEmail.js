/**@jsx jsx */

import { jsx } from "@emotion/core";
import axios from "axios";
import PropTypes from "prop-types";
import { Component } from "react";
import { Link } from "react-router-dom";
// const SERVER_URI = "localhost:5000";
class ConfirmEmail extends Component {
  state = {
    userId: "",
    token: "",
    confirmed: false
  };
  //   handleChange = key => e => {
  //     this.setState({ [key]: e.target.value });
  //   };
  updatePassword = e => {
    e.preventDefault();
    const { userId, token } = this.props;
    const { password } = this.state;
    axios
      .post(`/reset_password/receive_new_password/${userId}/${token}`, {
        password
      })
      .then(res => res)
      .catch(err => console.log("SERVER ERROR TO CLIENT:", err));
    this.setState({ submitted: !this.state.submitted });
  };

  componentDidMount() {
    this.setState({
      userId: this.props.userId,
      token: this.props.token,
      confirmed: true
    });
    const { userId, token } = this.props;

    axios
      .post(`/confirmed/email-confirmed/${userId}/${token}`)
      .then(res => res)
      .catch(err => console.log("SERVER ERROR TO CLIENT:", err));
    this.setState({ submitted: "We submitted" });
  }
  render() {
    const { confirmed } = this.state;
    return (
      <div>
        <h3 style={{ paddingBottom: "1.25rem" }}>Email Confirmation</h3>
        {confirmed ? (
          <div className="reset-password-form-sent-wrapper">
            <h2>That's it! Now for the good stuff</h2>
            <p>Hit the login button to continue</p>
            <p>Have Fun!</p>

            <Link to="/login" className="ghost-btn">
              Sign back in
            </Link>
          </div>
        ) : (
          <div className="reset-password-form-wrapper">
            <p>Whoops! Somethings gone wrong. We'll be with you shortly.</p>
          </div>
        )}
      </div>
    );
  }
}
ConfirmEmail.propTypes = {
  token: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired
};
export default ConfirmEmail;
