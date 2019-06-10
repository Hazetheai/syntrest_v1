// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx } from "@emotion/core";
// import { css as emoCSS } from "emotion";

export const Button = props => (
  <button
    css={{
      backgroundColor: "black",
      color: "#008F11",
      cursor: "pointer",
      padding: "0.4rem 0.6rem 0.4rem 0.6rem",
      borderRadius: "0.5rem",
      border: "transparent",
      margin: "0.4rem",
      textTransform: "uppercase",
      textDecoration: "none",
      display: "inline-block",
      transition: "all 0.2s",
      position: "relative",
      fontSize: "1.6rem",
      "&:hover": {
        boxShadow: "0 .5px 1px rgba(17, 17, 17, 0.2)",
        "&::after": {
          transform: "scaleX(1.4)",
          opacity: 0
        }
      },
      "&:active": { transform: "scale(0.97)" }
    }}
    {...props} // <- props contains the `className` prop
  />
);
