/** @jsx jsx */

import { jsx } from "@emotion/core";
import { FullScreenBtn } from "../buttons/fullscreenBtn";

const CardImg = props => {
  return (
    <div
      css={{
        display: "flex"
      }}
    >
      <img
        src={props.src}
        alt={props.alt}
        css={{
          display: "block",
          width: "30rem",
          height: "35.4rem",
          backgroundColor: "#c4c4c4",
          borderRadius: "2rem"
        }}
        {...props}
      />
      <FullScreenBtn text="FS" />
    </div>
  );
};

export default CardImg;
