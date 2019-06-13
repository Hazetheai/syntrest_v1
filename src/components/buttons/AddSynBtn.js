/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Button } from "./Button";

const AddSynBtn = props => {
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

export default AddSynBtn;
