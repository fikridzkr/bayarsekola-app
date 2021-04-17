import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "../components/operators/Navigation";
import Home from "../components/operators/Home";
import DataPayment from "../components/operators/DataPayment";
import ProfileSettings from "../components/operators/ProfileSettings";
import DataStudents from "../components/operators/DataStudents";

function Operators({ user, user_id }) {
  return (
    <Router>
      <Navigation user={user} />
      <Switch>
        <Route path="/dashboard" exact render={() => <Home user={user} />} />
        <Route path="/dashboard/payment" component={DataPayment} />
        <Route path="/dashboard/students" component={DataStudents} />
        <Route
          path="/dashboard/profile"
          render={() => <ProfileSettings user_id={user_id} />}
        />
      </Switch>
    </Router>
  );
}

export default Operators;
