import React from "react";
import { Route, Switch } from "react-router-dom";
import PublicDashboard from "./components/PublicDashboard";
import UserDashboard from "./components/UserDashboard";
import MyWallet from "./components/MyWallet";
import FormikAddForm from "./components/AddJoke";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import PrivateRoute from "./routes/PrivateRoute";
import UpdateJoke from "./components/UpdateJoke";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={PublicDashboard} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/userdashboard" component={UserDashboard} />
        <PrivateRoute exact path="/mywallet" component={MyWallet} />
        <PrivateRoute exact path="/addjoke" component={FormikAddForm} />
        <PrivateRoute exact path="/updateJoke/:id" component={UpdateJoke} />
      </Switch>
    </div>
  );
}

export default App;
