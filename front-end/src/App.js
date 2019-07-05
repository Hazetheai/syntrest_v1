import jwt_decode from "jwt-decode";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { logoutUser, setCurrentUser } from "./actions/authActions";
import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import HomeBtn from "./components/buttons/HomeBtn";
import { MoreBtn } from "./components/buttons/MoreBtn";
import { SaveBtn } from "./components/buttons/SaveBtn";
import { ShareBtn } from "./components/buttons/ShareBtn";
import SoloCard from "./components/cards/Card";
import CardImg from "./components/cards/CardImage";
import { Comment } from "./components/cards/Comment";
import Header from "./components/header/Header";
import Search from "./components/header/Search";
import Home from "./components/home/Home";
import Landing from "./components/layouts/Landing";
import { CardNav as Nav } from "./components/nav/CardNav";
import { MainNav } from "./components/nav/MainNav";
import RecoverPassword from "./components/PasswordReset/RecoverPassword";
import UpdatePassword from "./components/PasswordReset/UpdatePassword";
import PrivateRoute from "./components/private-routes/PrivateRoute";
import ProfilePage from "./components/profilePage/ProfilePage";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";

// Check for token to keep user logged in
if (localStorage.synJwtToken) {
  // Set auth token header auth
  const token = localStorage.synJwtToken;
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
          <Route exact path="/home" component={Home} />
          <Route exact path="/password/recover" component={RecoverPassword} />
          <Route
            path="/update-password/:userId/:token"
            render={({ match }) => (
              <UpdatePassword
                userId={match.params.userId}
                token={match.params.token}
              />
            )}
          />
          {/* <Route path="auth/github/callback" component={Home} /> */}

          <Switch>
            <PrivateRoute exact path="/profile" component={ProfilePage} />
          </Switch>

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
