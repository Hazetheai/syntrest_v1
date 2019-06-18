/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export default function HomeBtn(props) {
  return (
    <Button
      css={{
        backgroundColor: "#d0d5db"
      }}
      {...props}
    >
      <Link to="/">
        <img
          src={require("../../images/logo.png")}
          alt="Syntrest Logo"
          css={{
            width: "30px",
            height: "30px"
          }}
        />
      </Link>
    </Button>
  );
}
