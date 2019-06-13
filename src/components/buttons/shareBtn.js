/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Button } from "./Button";

export const ShareBtn = props => {
  return (
    <Button
      css={{
        backgroundColor: "#d0d5db"
      }}
    >
      {props.text}
    </Button>
  );
};
