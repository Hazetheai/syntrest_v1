/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import { Button } from "../buttons/Button";
import { MasonryBrick as Brick } from "../layouts/MasonryBrick";

class Home extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    console.log(localStorage.synJwtToken);

    console.log(this.props);
  };

  render() {
    const { user } = this.props.auth;
    // console.log("User", user);
    // console.log("this.props.auth", this.props.auth);
    return (
      <div
        css={{
          backgroundColor: "$color-grey-light-1",
          display: "flex",
          justifyContent: "center"
        }}
      >
        {/* Needs to be moved to MainNav */}
        {this.props.auth.isAuthenticated ? (
          <Fragment>
            <b>Hey there,</b> {user.name}
            <Button
              text="Logout"
              onClick={this.onLogoutClick}
              css={{ maxHeight: 36 }}
            />
          </Fragment>
        ) : (
          <Link to="/login">
            <Button text="Login" />
          </Link>
        )}
        <section
          css={{
            backgroundColor: "$color-grey-light-1",
            display: "flex",
            justifyContent: "center",
            position: "relative",
            maxWidth: "80vw",
            margin: "auto"
          }}
          className="masonry-container"
        >
          <div
            className="masonry"
            css={{
              display: "flex",
              justifyContent: "center",
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

Link.defaultProps = {
  to: "/"
};

Home.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Home);
