/**@jsx jsx */
import { Component } from "react";

import { jsx } from "@emotion/core";

class SoloCard extends Component {
  constructor(props) {
    super(props);
    this.state = { focused: false };
  }

  render() {
    return (
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "32rem",
          width: "32rem",
          height: "56.8rem",
          border: "solid #777",
          borderRadius: "2rem",
          backgroundColor: "azure"
        }}
        {...this.props}
      />
    );
  }
}

export default SoloCard;
