/** @jsx jsx */
import { jsx } from "@emotion/core";

import jwt_decode from "jwt-decode";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { logoutUser, setCurrentUser } from "./actions/authActions";
import "./App.css";
import Loading from "./components/auth/Loading";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
// import { MoreBtn } from "./components/buttons/MoreBtn";
// import { SaveBtn } from "./components/buttons/SaveBtn";
// import { ShareBtn } from "./components/buttons/ShareBtn";
// import SoloCard from "./components/cards/Card";
// import CardImg from "./components/cards/CardImage";
// import { Comment } from "./components/cards/Comment";
// import { CardNav as Nav } from "./components/nav/CardNav";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Landing from "./components/layouts/Landing";
import RecoverPassword from "./components/PasswordReset/RecoverPassword";
import UpdatePassword from "./components/PasswordReset/UpdatePassword";
import PrivateRoute from "./components/private-routes/PrivateRoute";
import ProfilePage from "./components/profilePage/ProfilePage";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import Confirmed from "./components/auth/Confirmed";
import Unconfirmed from "./components/auth/Unconfirmed";

// Check for token to keep user logged in
if (localStorage.synJwtToken) {
  // Set auth token header auth
  const token = localStorage.synJwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  console.log("decoded", decoded);
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
        <div
          className="App"
          css={{
            backgroundColor: "#342a33",
            minHeight: "100vh"
          }}
        >
          <Header />

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
          <Route
            path="/auth/:platform/callback/:accessToken"
            render={({ match }) => (
              <Loading
                accessToken={match.params.accessToken}
                platform={match.params.platform}
              />
            )}
          />
          <Route exact path="/unconfirmed" component={Unconfirmed} />
          <Route
            exact
            path="/confirmed/email-confirmed"
            component={Confirmed}
          />
          <Switch>
            <PrivateRoute exact path="/profile" component={ProfilePage} />
          </Switch>

          {/* <SoloCard>
            <Nav>
              <MoreBtn text="More" />
              <ShareBtn text="Share" />
              <SaveBtn text="Save" />
            </Nav>
            <CardImg />
            <Comment />
          </SoloCard> */}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
