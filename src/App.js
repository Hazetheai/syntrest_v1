import React from "react";
import { ShareBtn } from "./components/buttons/shareBtn";
import { SaveBtn } from "./components/buttons/saveBtn";
import { MoreBtn } from "./components/buttons/moreBtn";
import { CardNav as Nav } from "./components/nav/cardNav";
import { Comment } from "./components/cards/comment";
import CardImg from "./components/cards/cardImage";
import SoloCard from "./components/cards/card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SoloCard>
        <Nav>
          <MoreBtn text="More" />
          <ShareBtn text="Share" />
          <SaveBtn text="Save" />
        </Nav>
        <CardImg />
        <Comment prevComment="A previous comment" />
      </SoloCard>
    </div>
  );
}

export default App;
