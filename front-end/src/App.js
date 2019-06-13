import React from "react";
import { ShareBtn } from "./components/buttons/ShareBtn";
import { SaveBtn } from "./components/buttons/SaveBtn";
import { MoreBtn } from "./components/buttons/MoreBtn";
import HomeBtn from "./components/buttons/HomeBtn";
import { CardNav as Nav } from "./components/nav/CardNav";
import { Comment } from "./components/cards/Comment";
import CardImg from "./components/cards/CardImage";
import SoloCard from "./components/cards/Card";
import Home from "./components/layouts/Home";
import MainNav from "./components/nav/MainNav";
import Header from "./components/header/Header";
import Search from "./components/header/Search";
import Login from "./components/layouts/Login";
import Signup from "./components/layouts/Signup";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header>
        <HomeBtn />
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

      <Signup />
      <Login />
    </div>
  );
}

export default App;
