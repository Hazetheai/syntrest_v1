/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "../buttons/Button";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <section
          className="signupOrLogin"
          css={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"
          }}
        >
          <h4>SYNTREST</h4>
          <p>Where do you want to go?</p>
          <br />
          <div>
            <h3>New Here?</h3>
            <Link
              to="/register"
              css={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
            >
              <Button text="Register" />
            </Link>
          </div>
          <div>
            {/* <Link
              to="/login"
              css={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
            >
              Log In
            </Link> */}
          </div>
        </section>
      </div>
    );
  }
}
