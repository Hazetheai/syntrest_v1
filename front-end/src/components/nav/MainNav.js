/** @jsx jsx */

import { jsx } from "@emotion/core";

import AddSynBtn from "../buttons/AddSynBtn";
import ProfileBtn from "../buttons/ProfileBtn";

import { Component } from "react";

export default class MainNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    };
  }
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
        {...this.props}
      >
        <AddSynBtn text="+" />
        <ProfileBtn text="Lair" />
      </nav>
    );
  }
}
