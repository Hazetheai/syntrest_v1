import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { ShareBtn } from "./components/buttons/ShareBtn";
import { SaveBtn } from "./components/buttons/SaveBtn";
import { MoreBtn } from "./components/buttons/MoreBtn";
import HomeBtn from "./components/buttons/HomeBtn";
import { CardNav as Nav } from "./components/nav/CardNav";
import { Comment } from "./components/cards/Comment";
import CardImg from "./components/cards/CardImage";
import SoloCard from "./components/cards/Card";
import Home from "./components/home/Home";
import Landing from "./components/layouts/Landing";

import MainNav from "./components/nav/MainNav";
import Header from "./components/header/Header";
import Search from "./components/header/Search";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrivateRoute from "./components/private-routes/PrivateRoute";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
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
          <Switch>
            <PrivateRoute exact path="/home" component={Home} />
          </Switch>
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
