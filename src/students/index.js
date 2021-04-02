import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "../components/students/Navigation";
import Footer from "../components/Footer";
import Home from "../components/students/Home";
import ProfileSettings from "../components/students/ProfileSettings";
import Bills from "../components/students/Bills";
import Payment from "../components/students/Payment";
function Students({ user, activeUser, user_id }) {
  return (
    <Router>
      <Navigation user={user} />
      <Switch>
        <Route
          path="/dashboard"
          exact
          render={() => (
            <Home activeUser={activeUser} user={user} user_id={user_id} />
          )}
        />
        <Route path="/dashboard/bills" component={Bills} />
        <Route path="/dashboard/payment" component={Payment} />
        <Route path="/dashboard/profile" component={ProfileSettings} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Students;
