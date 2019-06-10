/** @jsx jsx */
import { jsx } from "@emotion/core";

import React, { Component } from "react";

export default class MasonryCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <figure class="masonry__brick">
          <img
            className="masonry-image"
            src="https://source.unsplash.com/400x300/?synth/"
            alt=""
          />
        </figure>
      </div>
    );
  }
}
