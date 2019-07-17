/** @jsx jsx */

import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import HomeBtn from "../buttons/HomeBtn";
import Search from "../header/Search";
import MainNav from "../nav/MainNav";
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userLoggedIn: false
    };
  }

  render() {
    // const { user } = this.props.auth;

    return (
      <header
        css={{
          position: "relative",
          top: "0",
          left: "0",
          minHeight: "25px",
          padding: "5px 10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <HomeBtn />
        <Search />
        <MainNav />
      </header>
    );
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Header);
