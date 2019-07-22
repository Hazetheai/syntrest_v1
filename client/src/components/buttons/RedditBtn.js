/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Button } from "./Button";

const RedditBtn = props => {
  return (
    <Button
      text="Reddit"
      css={{
        color: "#333",
        backgroundColor: "#FF5700",

        borderColor: "#333",
        borderWidth: ".4rem",
        width: "8rem",
        height: "4rem"
      }}
      {...props}
    >
      <i class="fab fa-github" />
    </Button>
  );
};

export default RedditBtn;
