/** @jsx jsx */
import { jsx } from "@emotion/core";

const imageStyle = {
  maxWidth: "400px"
};
export default function Image({ image }) {
  return (
    <img className="single-photo" src={image} alt="random" style={imageStyle} />
  );
}
