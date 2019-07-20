/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "../buttons/Button";
import Keyboard from "../synth/Keyboard";

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
          <h1 className="headingPrimary">SYNTREST</h1>
          <p>
            Welcome! We're afraid that nothing's ready yet, <br />
            so why not have a noodle on the keyboard while you wait!
          </p>
          <br />
          <div
            css={{
              marginBottom: "4rem"
            }}
          >
            <h3 className="headingTertiary">New Here?</h3>
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
          <div
            className="synth"
            css={{
              backgroundColor: "white",
              borderRadius: "5px"
            }}
          >
            <Keyboard />
          </div>
        </section>
      </div>
    );
  }
}
