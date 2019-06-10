/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Button } from "./Button";

import React from "react";

const ProfileBtn = props => {
  return (
    <Button
      css={{
        backgroundColor: "black"
      }}
      {...props}
    >
      {props.text}
    </Button>
  );
};

export default ProfileBtn;
