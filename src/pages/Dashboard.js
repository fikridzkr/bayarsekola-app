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
  const [user_id, setUser_id] = useState();
  const [userStatus, setUserStatus] = useState();
  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setRole(response.data.user[0].level);
        setCheckLogin(response.data.loggedIn);
        setUsername(response.data.user[0].username);
        setUser_id(response.data.user[0].id);
        setUserStatus(response.data);
      } else {
        history.push("/");
      }
      console.log(response);
    });
  }, []);

  return (
    <>
      {role === "admin" && <Admin user={username} user_id={user_id} />}
      {role === "operators" && <Operators user={username} />}
      {role === "students" && (
        <Students user={username} user_id={user_id} userStatus={userStatus} />
      )}
    </>
  );
};

export default Dashboard;
