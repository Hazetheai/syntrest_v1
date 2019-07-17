/** @jsx jsx */

import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import AddSynBtn from "../buttons/AddSynBtn";
import { Button } from "../buttons/Button";
import ProfileBtn from "../buttons/ProfileBtn";

export class MainNav extends Component {
  render() {
    return (
      <nav
        className="Nav"
        css={{
          display: "inline-flex",
          flexWrap: "nowrap",
          padding: "5px",
          margin: "0 10px",
          width: "fit-content",
          justifySelf: "flex-end"
        }}
      >
        {this.props.auth.isAuthenticated ? (
          <Fragment>
            <AddSynBtn text="+" />{" "}
            <Link to="/profile">
              <ProfileBtn text="Lair" />
            </Link>{" "}
          </Fragment>
        ) : (
          <Link to="/login">
            <Button text="Login" />
          </Link>
        )}
        <Link />
      </nav>
    );
  }
}

MainNav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(MainNav);
