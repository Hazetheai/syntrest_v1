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
          minHeight: "25px",
          padding: "5px 10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
        {...this.props}
      />
    );
  }
}

export default Header;
