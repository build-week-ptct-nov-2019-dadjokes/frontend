import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { reducer } from "./reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AppWithRouter = withRouter(App);

const store = createStore(reducer, applyMiddleware(thunk, logger));

render(
  <Provider store={store}>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>,
  document.getElementById("root")
);
