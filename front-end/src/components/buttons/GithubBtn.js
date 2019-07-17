/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Button } from "./Button";

const GithubBtn = props => {
  return (
    <Button
      text="Lair"
      css={{
        color: "#333",
        backgroundColor: "#f5f5f5",

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

export default GithubBtn;
