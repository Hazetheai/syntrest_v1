/**@jsx jsx */
import { jsx, css } from "@emotion/core";
import { useEffect } from "react";
import Tone from "tone";

const key = css({
  position: "relative",
  width: "60px",
  height: "180px",
  border: "1px solid black",
  borderRight: "none",
  background: "#fffff0",
  borderRadius: "5px",
  boxShadow: "0px 3px 5px #666",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  paddingBottom: "10px",
  fontWeight: "bold",
  "&::lastChild": {
    borderRight: "1px solid black"
  }
});

// TODO
// const pressed = css({
//   transformOrigin: "top",
//   transform: "scaleY(.96)",
//   boxShadow: "inset 0px 1px 2px #666"
// });

const blackKey = css({
  position: "absolute",
  top: "-1px",
  left: "37.5px",
  width: "45px",
  height: "120px",
  background: "black",
  borderRadius: "5px",
  boxShadow: "0px 3px 5px #666",
  zIndex: "999",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  paddingBottom: "10px",
  color: "white"
});

const Keyboard = () => {
  const keyToPitch = {
    " ": " ",
    z: "C3",
    s: "C#3",
    x: "D3",
    d: "D#3",
    c: "E3",
    v: "F3",
    g: "F#3",
    b: "G3",
    h: "G#3",
    n: "A3",
    j: "A#3",
    m: "B3",
    ",": "C4"
  };

  const gainNode = Tone.context.createGain();
  const env = new Tone.Envelope({
    attack: 0.1,
    decay: 0.2,
    sustain: 1,
    release: 0.1
  });
  env.connect(gainNode.gain);

  const synth = new Tone.MonoSynth({}).toMaster();

  useEffect(() => {
    window.addEventListener(
      "click",
      (onclick = e => {
        synth.triggerAttackRelease(e.target.dataset.note, "8n");
      })
    );

    window.addEventListener(
      "touchstart",
      (onclick = e => {
        synth.triggerAttackRelease(e.target.dataset.note, "8n");
      })
    );

    // window.addEventListener(
    //   "keydown",
    //   (onkeydown = e => {
    //     synth.triggerAttack(keyToPitch[e.key], Tone.context.currentTime);
    //   })
    // );

    // window.addEventListener(
    //   "keyup",
    //   (onkeyup = e => {
    //     synth.triggerRelease();
    //   })
    // );
  }, [keyToPitch, synth]);

  return (
    <div
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "-4px"
      }}
    >
      <div css={{ display: "flex", flexDirection: "column" }}>
        <ul
          id="piano"
          css={{
            listStyle: "none",
            display: "flex"
          }}
        >
          <li data-note="C3" className="key" css={key}>
            <div data-note="C#3" className="blackKey" css={blackKey}>
              S
            </div>
            Z
          </li>
          <li data-note="D3" className="key" css={key}>
            <div data-note="D#3" className="blackKey" css={blackKey}>
              D
            </div>
            X
          </li>
          <li data-note="E3" className="key" css={key}>
            C
          </li>
          <li data-note="F3" className="key" css={key}>
            <div data-note="F#3" className="blackKey" css={blackKey}>
              G
            </div>
            V
          </li>
          <li data-note="G3" className="key" css={key}>
            <div data-note="G#3" className="blackKey" css={blackKey}>
              H
            </div>
            B
          </li>
          <li data-note="A3" className="key" css={key}>
            <div data-note="A#3" className="blackKey" css={blackKey}>
              J
            </div>
            N
          </li>
          <li data-note="B3" className="key" css={key}>
            M
          </li>
          {/* <li data-note="C4" className="key" css={key}>
              ,
            </li> */}
        </ul>
        {/* <div
          css={{
            marginTop: "4rem",
            height: "10rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <h3 className="headingTertiary">Osc Options</h3>

          <select id="select">
            <option value="selectOne">Select an oscillator</option>
            <option value="Synth">Synth</option>
            <option value="FMSynth">FMSynth</option>
            <option value="NoiseSynth">NoiseSynth</option>
          </select>
        </div> */}
      </div>
    </div>
  );
};

export default Keyboard;
