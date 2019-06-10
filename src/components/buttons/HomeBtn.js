/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Button } from "./Button";

import React from "react";

export default function HomeBtn(props) {
  return (
    <Button
      css={{
        backgroundColor: "#d0d5db"
      }}
      {...props}
    >
      <img
        src={require("../../images/logo.png")}
        alt="Syntrest Logo"
        css={{
          width: "30px",
          height: "30px"
        }}
      />
    </Button>
  );
}
