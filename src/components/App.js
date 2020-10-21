import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import HomePage from "./HomePage";
import Users  from "./Users";
import NotFound  from "./NotFoundPage";
function App() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route  path="/" exact component={HomePage} />
         <Route  exact path="/match/:id" component={Users}></Route> 
         <Route component={NotFound} />
        </Switch>
    </div>
  );
}

export default App;



