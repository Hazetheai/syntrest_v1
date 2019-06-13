/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Button } from "./Button";

const ProfileBtn = props => {
  return (
    <Button
      css={{
        backgroundColor: "black"
      }}
      {...props}
    >
      {props.text}
    </Button>
  );
};

export default ProfileBtn;
