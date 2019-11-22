import React from "react";
import { Route, Switch } from "react-router-dom";
import PublicDashboard from "./components/PublicDashboard";
import UserDashboard from "./components/UserDashboard";
import MyWallet from "./components/MyWallet";
import FormikAddForm from "./components/AddJoke";
import './App.css';
import Register from './components/Register';
import SearchForm from "./components/Search";
import Login from "./components/Login";


function App() {
  return (
    <div className="App">  
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/publicdashboard" component={PublicDashboard} />
        <Route path="/userdashboard" component={UserDashboard} />
        <Route path="/mywallet" component={MyWallet} />
        <Route path="/searchjokes" component={SearchForm} />
        <Route path="/addjoke" component={FormikAddForm} />
      </Switch>  
    </div>
  );
}

export default App;
