/** @jsx jsx */

import { jsx } from "@emotion/core";
import AddSynBtn from "../buttons/AddSynBtn";
import ProfileBtn from "../buttons/ProfileBtn";

import React, { Component } from "react";

export default class MainNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    };
  }
  render() {
    return (
      <div>
        <nav className="Nav">
          <AddSynBtn text="+" />
          <ProfileBtn text="Lair" />
        </nav>
      </div>
    );
  }
}
