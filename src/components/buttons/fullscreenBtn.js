/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Button } from "./button";

export const FullScreenBtn = props => {
  return (
    <Button
      css={{
        backgroundColor: "transparent",
        position: "absolute"
      }}
    >
      {props.text}
    </Button>
  );
};
