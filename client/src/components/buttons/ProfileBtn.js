/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Button } from "./Button";

const ProfileBtn = props => {
  return (
    <Button
      text="Lair"
      css={{
        backgroundColor: "black"
      }}
      {...props}
    />
  );
};

export default ProfileBtn;
