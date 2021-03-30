import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "../components/operators/Navigation";
import Home from "../components/operators/Home";
import DataPayment from "../components/operators/DataPayment";
import ProfileSettings from "../components/operators/ProfileSettings";
function Operators({ user }) {
  return (
    <Router>
      <Navigation user={user} />
      <Switch>
        <Route path="/dashboard" exact render={() => <Home user={user} />} />
        <Route path="/dashboard/payment" component={DataPayment} />
        <Route path="/dashboard/profile" component={ProfileSettings} />
      </Switch>
    </Router>
  );
}

export default Operators;
