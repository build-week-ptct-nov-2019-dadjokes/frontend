import React from "react";
import { Route, Switch } from "react-router-dom";
import PublicDashboard from "./components/PublicDashboard";
import UserDashboard from "./components/UserDashboard";
import MyWallet from "./components/MyWallet";
import FormikAddForm from "./components/AddJoke";
import "./App.css";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" />
        <Route exact path="/register" component={Register} />
        <Route exact path="/publicdashboard" component={PublicDashboard} />
        <Route exact path="/userdashboard" component={UserDashboard} />
        <Route exact path="/mywallet" component={MyWallet} />
        <Route exact path="/searchjokes" />
        <Route exact path="/addjoke" component={FormikAddForm} />
      </Switch>
    </div>
  );
}

export default App;
