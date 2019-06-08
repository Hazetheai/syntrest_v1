/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Button } from "./button";

export const MoreBtn = props => {
  return (
    <Button
      css={{
        padding: "0.8rem 0.6rem 0.8rem 0.6rem",
        border: "solid 1px #333"
      }}
    >
      {" "}
      {props.text}
    </Button>
  );
};
