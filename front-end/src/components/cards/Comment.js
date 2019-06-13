/**@jsx jsx */

import { jsx } from "@emotion/core";

export const Comment = props => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "90%"
      }}
      {...props}
    >
      <input
        type="text"
        name="comment"
        placeholder="Write a comment"
        css={{
          margin: "0.5rem",
          borderRadius: "0.5rem",
          border: "transparent",
          backgroundColor: "#cec8c8",
          width: "25rem",
          fontSize: "1.5rem",
          fontFamily: "inherit",
          padding: "1rem 2rem",
          outline: "none",
          color: "#111"
        }}
      />
      <p
        css={{
          margin: "0.5rem",
          borderRadius: "0.5rem",
          border: "transparent",
          backgroundColor: "#cec8c8",
          width: "25rem",
          fontSize: "1.5rem",
          fontFamily: "inherit",
          padding: "1rem 2rem",
          outline: "none",
          color: "#111"
        }}
      >
        {props.prevComment}
      </p>
    </div>
  );
};
