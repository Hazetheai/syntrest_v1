/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Button } from "./Button";

const AddSynBtn = props => {
  return (
    <Button
      text="+"
      css={{
        backgroundColor: "black"
      }}
      {...props}
    />
  );
};

export default AddSynBtn;
