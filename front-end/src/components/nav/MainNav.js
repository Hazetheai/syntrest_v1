/** @jsx jsx */

import { jsx } from "@emotion/core";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import AddSynBtn from "../buttons/AddSynBtn";
import { Button } from "../buttons/Button";
import ProfileBtn from "../buttons/ProfileBtn";
export const MainNav = () => {
  return (
    <nav
      className="Nav"
      css={{
        display: "inline-flex",
        flexWrap: "nowrap",
        padding: "5px",
        margin: "0 10px",
        width: "fit-content",
        justifySelf: "flex-end"
      }}
    >
      {localStorage.synJwtToken ? (
        <Fragment>
          <AddSynBtn text="+" />{" "}
          <Link to="/profile">
            <ProfileBtn text="Lair" />
          </Link>{" "}
        </Fragment>
      ) : (
        <Link to="/login">
          <Button text="Login" />
        </Link>
      )}
      <Link />
    </nav>
  );
};
