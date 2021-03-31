import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "../components/students/Navigation";
import Home from "../components/students/Home";
import ProfileSettings from "../components/students/ProfileSettings";
import Bills from "../components/students/Bills";
import Payment from "../components/students/Payment";
function Students({ user }) {
  return (
    <Router>
      <Navigation user={user} />
      <Switch>
        <Route path="/dashboard" exact render={() => <Home />} />
        <Route path="/dashboard/bills" component={Bills} />
        <Route path="/dashboard/payment" component={Payment} />
        <Route path="/dashboard/profile" component={ProfileSettings} />
      </Switch>
    </Router>
  );
}

export default Students;
