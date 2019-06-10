/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Button } from "./Button";

import React from "react";

const AddSynBtn = props => {
  return (
    <Button
      css={{
        backgroundColor: "black",
        color: "#003b00"
      }}
      {...props}
    >
      {props.text}
    </Button>
  );
};

export default AddSynBtn;
