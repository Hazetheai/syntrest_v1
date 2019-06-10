/** @jsx jsx */

import { jsx } from "@emotion/core";

import React, { Component } from "react";

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <header
        css={{
          position: "relative",
          top: "0",
          left: "0",
          width: "100vw",
          minHeight: "25px",
          padding: "5px 10px"
        }}
        {...this.props}
      />
    );
  }
}

export default Header;
