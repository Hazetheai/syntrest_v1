/** @jsx jsx */
import { jsx } from "@emotion/core";

import { Component } from "react";

export class MasonryBrick extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <figure
          className="masonry__brick"
          css={{
            flex: "auto",
            height: "25rem",
            minWidth: "15rem",
            margin: "0rem 0.8rem 0.8rem 0",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "$box-shadow",

            "&:nth-child(4n + 1)": {
              width: "250px"
            },
            "&:nth-child(4n + 1):nth-child(4n + 2)": {
              width: "325px"
            },
            "&:nth-child(4n + 1):nth-child(4n + 3)": {
              width: "180px"
            },
            "&:nth-child(4n + 1):nth-child(4n + 4)": {
              width: "380px"
            },
            "&:hover": {
              opacity: "0.7"
            }
          }}
          {...this.props}
        >
          <img
            className="masonry-image"
            src="https://source.unsplash.com/400x300/?synth/"
            alt=""
            css={{
              objectFit: "cover",
              width: "100%",
              height: "100%"
            }}
          />
        </figure>
      </div>
    );
  }
}
