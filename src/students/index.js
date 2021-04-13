import Axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "../components/students/Navigation";
import Footer from "../components/Footer";
import RegisterStudent from "../auth/RegisterStudent";
import DataUser from "../components/students/DataUser";
import ProfileSettings from "../components/students/ProfileSettings";
import Bills from "../components/students/Bills";
import Payment from "../components/students/Payment";
function Students({ user, user_id }) {
  const [activeUser, setActiveUser] = useState();
  useEffect(() => {
    Axios.post("http://localhost:3001/studentstatus", {
      user: user,
    })
      .then((res) => {
        console.log(res.data.response[0].is_active);
        setActiveUser(res.data.response[0].is_active);
      })
      .catch((err) => console.log(err));
  });
  return (
    <Router>
      {activeUser === "yes" && <Navigation user={user} />}
      <Switch>
        <Route
          path="/dashboard"
          exact
          render={() => (
            <>
              {activeUser === "yes" && <DataUser user_id={user_id} />}
              {activeUser === "no" && (
                <RegisterStudent user={user} user_id={user_id} />
              )}
            </>
          )}
        />
        <Route
          path="/dashboard/bills"
          render={() => <Bills user_id={user_id} />}
        />
        <Route
          path="/dashboard/payment"
          render={() => <Payment user_id={user_id} />}
        />
        <Route
          path="/dashboard/profile"
          render={() => <ProfileSettings user_id={user_id} />}
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Students;
