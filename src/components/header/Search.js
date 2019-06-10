/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false
    };
  }

  render() {
    return (
      <div
        css={{
          width: "75%",
          padding: "6px 15px",
          borderRadius: "10px",
          display: "inline-flex",
          backgroundColor: "#f4f4f4"
        }}
      >
        <input
          type="text"
          name="search"
          placeholder="What's your dream machine?"
          css={{
            width: "100%",
            padding: "5px 10px",
            border: "1px solid #003B00",
            borderRadius: "10px"
          }}
        />
      </div>
    );
  }
}
