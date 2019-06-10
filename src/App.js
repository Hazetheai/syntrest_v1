import React from "react";
import { ShareBtn } from "./components/buttons/ShareBtn";
import { SaveBtn } from "./components/buttons/SaveBtn";
import { MoreBtn } from "./components/buttons/MoreBtn";
import { CardNav as Nav } from "./components/nav/CardNav";
import { Comment } from "./components/cards/Comment";
import CardImg from "./components/cards/CardImage";
import SoloCard from "./components/cards/Card";
import Home from "./components/layouts/Home";
import MainNav from "./components/nav/MainNav";
import Header from "./components/header/Header";
import Search from "./components/header/Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header>
        <Search />
        <MainNav />
      </Header>

      <Home />
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
