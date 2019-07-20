/** @jsx jsx */
import { jsx } from "@emotion/core";

export const MasonryBrick = () => {
  return (
    <div>
      <figure
        className="masonry__brick"
        css={{
          flex: "auto",
          height: "25rem",
          minWidth: "15rem",
          margin: "0rem 0.8rem 0.8rem 0",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "$box-shadow",

          "&:hover": {
            opacity: "0.7"
          }
        }}
      >
        <img
          className="masonry-image"
          src="https://source.unsplash.com/400x300/?=keyboard"
          alt=""
          css={{
            objectFit: "cover",
            width: "100%",
            height: "100%"
          }}
        />
      </figure>
    </div>
  );
};
