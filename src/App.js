import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import PublicDashboard from "./components/PublicDashboard";

function App() {
  return (
    <div className="App">
      <PublicDashboard />

      
      
      <Switch>
        <Route exact path="/" />
        <Route path="/register" />
        <Route path="/publicdashboard" />
        <Route path="/userdashboard" />
      </Switch>  
      
    </div>
  );
}

export default App;
