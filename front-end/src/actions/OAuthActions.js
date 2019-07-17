import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";

// Login - get user token
export const loginOAuth = accessToken => dispatch => {
  axios
    .post("/oauthjwt/token", { token: accessToken })
    .then(res => {
      // console.log("res.data", res.data);
      const { token } = res.data;
      // console.log("token", token);
      localStorage.setItem("synJwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
