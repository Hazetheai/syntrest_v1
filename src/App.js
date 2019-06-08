import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="card">
          <div className="card__nav">
            <button className="card__btn--more btn btn--more">&#8942;</button>
            <button className="card__btn--share btn btn--share">Share</button>
            <button className="card__btn--save btn btn--save">Save</button>
          </div>
          <div className="card__image">
            <button className="card__btn--fullscreen btn btn--fullscreen">
              fullscreen
            </button>
            <img src="" alt="" srcset="" />
          </div>
          <div className="card__comment">
            <input
              className="comment comment--input card__comment--input"
              type="text"
              name="comment"
              placeholder="Write a comment"
            />
            <p className="comment comment--previous card__comment">
              A Previous comment
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
