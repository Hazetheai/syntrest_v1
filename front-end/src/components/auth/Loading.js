/** @jsx jsx */

import { jsx } from "@emotion/core";
import axios from "axios";
import PropTypes from "prop-types";
import { Component } from "react";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    axios.post("/getjwt/token", { token: this.props.accessToken }).then(res => {
      const { token } = res.data;
      console.log("token", token);
      localStorage.setItem("synJwtToken", token);
      console.log("Mounting");
      this.setState({ loading: false });
    });
  }

  //   componentWillReceiveProps(nextProps) {
  //       // push user to profile when they login
  //       if (nextProps.auth.isAuthenticated) {
  //         this.props.history.push("/profile");
  //     }
  //     if (nextProps.errors) {
  //       this.setState({
  //         errors: nextProps.errors
  //       });
  //     }
  //   }

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
      </div>
    );
  }
}

Login.propTypes = {
  accessToken: PropTypes.string.isRequired
};
export default Login;
