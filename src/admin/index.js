import React from "react";
import Navigation from "../components/admin/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DataStudents from "../components/admin/DataStudents";
import DataAdmin from "../components/admin/DataAdmin";
import DataPayment from "../components/admin/DataPayment";
import ProfileSettings from "../components/admin/ProfileSettings";
import Home from "../components/admin/Home";
function Admin({ user }) {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/dashboard" exact render={() => <Home user={user} />} />
        <Route path="/dashboard/students" component={DataStudents} />
        <Route path="/dashboard/admin" component={DataAdmin} />
        <Route path="/dashboard/payment" component={DataPayment} />
        <Route path="/dashboard/profile" component={ProfileSettings} />
      </Switch>
    </Router>
  );
}

export default Admin;
