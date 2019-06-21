/** @jsx jsx */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import { jsx } from "@emotion/core";
import { MasonryBrick as Brick } from "../layouts/MasonryBrick";

export default class Home extends Component {
  render() {
    return (
      <div>
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
              flexFlow: "row wrap",
              width: "100%"
            }}
            {...this.props}
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
