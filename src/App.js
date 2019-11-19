import React from "react";
import { Route, Switch } from "react-router-dom";
import PublicDashboard from "./components/PublicDashboard";
import UserDashboard from "./components/UserDashboard";
import MyWallet from "./components/MyWallet";
import FormikSearchForm from "./components/Search";
import FormikAddForm from "./components/AddJoke";

function App() {
  return (
    <div className="App">
      <UserDashboard />
      

      
      
      <Switch>
        <Route exact path="/" />
        <Route path="/register" />
        <Route path="/publicdashboard" component={PublicDashboard} />
        <Route path="/userdashboard" component={UserDashboard} />
        <Route path="/mywallet" component={MyWallet} />
        <Route path="/searchjokes" component={FormikSearchForm} />
        <Route path="/addjoke" component={FormikAddForm} />
      </Switch>  
      
    </div>
  );
}

export default App;
