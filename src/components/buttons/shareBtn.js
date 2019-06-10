/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Button } from "./Button";

export const ShareBtn = props => {
  return (
    <Button
      css={{
        backgroundColor: "#419dd9"
      }}
    >
      {props.text}
    </Button>
  );
};
