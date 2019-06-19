import { createStore, applyMiddelWare, compose } from "redux";
import thunk from "redux-thunk";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  () => [],
  initialState,
  compose(
    applyMiddelWare(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
