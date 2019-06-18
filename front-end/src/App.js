import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import { ShareBtn } from "./components/buttons/ShareBtn";
import { SaveBtn } from "./components/buttons/SaveBtn";
import { MoreBtn } from "./components/buttons/MoreBtn";
import HomeBtn from "./components/buttons/HomeBtn";
import { CardNav as Nav } from "./components/nav/CardNav";
import { Comment } from "./components/cards/Comment";
import CardImg from "./components/cards/CardImage";
import SoloCard from "./components/cards/Card";
import Home from "./components/layouts/Home";
import Landing from "./components/layouts/Landing";

import MainNav from "./components/nav/MainNav";
import Header from "./components/header/Header";
import Search from "./components/header/Search";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

function App() {
  return (
    <Provider>
      <Router>
        {" "}
        <div className="App">
          <Header>
            <HomeBtn />
            <Search />
            <MainNav />
          </Header>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Home />
          <SoloCard>
            <Nav>
              <MoreBtn text="More" />
              <ShareBtn text="Share" />
              <SaveBtn text="Save" />
            </Nav>
            <CardImg />
            <Comment />
          </SoloCard>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
