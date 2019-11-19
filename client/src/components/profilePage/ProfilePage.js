/** @jsx jsx */

import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Button } from "../buttons/Button";
import { MasonryBrick as Brick } from "../layouts/MasonryBrick";
import Upload from "./Upload";
import { Link } from "react-router-dom";
class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    // console.log("User", user);
    // console.log("this.props.auth", this.props.auth);
    return (
      <div>
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "1rem",
            marginRight: "2rem"
          }}
        >
          {this.props.auth.isAuthenticated ? (
            <span>
              <h3 className="headingTertiary">Hey there, {user.name}</h3>
            </span>
          ) : null}
          <Button text="Logout" onClick={this.onLogoutClick} />
          <Link to="delete-account">
            <Button type="link" text="Delete?"></Button>
          </Link>
        </div>
        <section
          css={{
            backgroundColor: "$color-grey-light-1",
            position: "relative",
            maxWidth: "80vw",
            margin: "auto"
          }}
          className="masonry-container"
        >
          <Upload />
          <div
            className="masonry"
            css={{
              display: "flex",
              flexFlow: "row wrap",
              width: "100%"
            }}
          >
            <Brick />
            <Brick />
            <Brick />
            <Brick />
            <Brick />
          </div>
        </section>
      </div>
    );
  }
}

ProfilePage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(ProfilePage);
