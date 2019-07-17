/** @jsx jsx */
import { jsx } from "@emotion/core";

export const CardNav = props => {
  return (
    <nav
      css={{
        display: "flex",
        margin: "2rem"
      }}
      {...props}
    />
  );
};
