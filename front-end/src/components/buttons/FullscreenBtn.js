/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Button } from "./Button";

export const FullScreenBtn = props => {
  return (
    <Button
      text="FS"
      css={{
        backgroundColor: "transparent",
        position: "absolute"
      }}
    />
  );
};
