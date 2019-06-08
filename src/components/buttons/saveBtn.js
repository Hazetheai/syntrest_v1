/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Button } from "./button";

export const SaveBtn = props => {
  return (
    <Button
      css={{
        border: "solid 1px #333"
      }}
    >
      {" "}
      {props.text}
    </Button>
  );
};
