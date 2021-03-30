import React, { useState, useEffect } from "react";
import Axios from "axios";
import Admin from "../admin";
import Operators from "../operators";
import Students from "../students";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  let history = useHistory();
  const [role, setRole] = useState();
  const [checkLogin, setCheckLogin] = useState();
  const [username, setUsername] = useState();

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setRole(response.data.user[0].level);
        setCheckLogin(response.data.loggedIn);
        setUsername(response.data.user[0].username);
      } else {
        history.push("/");
      }
      console.log(response);
    });
  }, []);
  return (
    <>
      {role === "admin" && <Admin user={username} />}{" "}
      {role === "operators" && <Operators />}
      {role === "students" && <Students />}
    </>
  );
};

export default Dashboard;
