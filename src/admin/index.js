import React from "react";
import Navigation from "../components/admin/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DataStudents from "../components/admin/DataStudents";
import DataAdmin from "../components/admin/DataAdmin";
import DataPayment from "../components/admin/DataPayment";
import DataOperators from "../components/admin/DataOperators";
import ProfileSettings from "../components/admin/ProfileSettings";
import Home from "../components/admin/Home";
function Admin({ user, user_id }) {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/dashboard" exact render={() => <Home user={user} />} />
        <Route path="/dashboard/students" component={DataStudents} />
        <Route path="/dashboard/admin" component={DataAdmin} />
        <Route path="/dashboard/operators" component={DataOperators} />
        <Route
          path="/dashboard/profile"
          render={() => <ProfileSettings user_id={user_id} />}
        />
      </Switch>
    </Router>
  );
}

export default Admin;
