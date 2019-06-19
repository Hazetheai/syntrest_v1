/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

export default function HomeBtn(props) {
  return (
    <button
      css={{
        backgroundColor: "#c0c0c0",
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
      {...props}
    >
      <Link to="/">
        <img
          src={logo}
          alt="Syntrest Logo"
          css={{
            width: "30px",
            height: "30px"
          }}
        />
      </Link>
    </button>
  );
}
