import Axios from "axios";
import React, { useState, useEffect } from "react";
import RegisterStudent from "../../auth/RegisterStudent";
import DataUser from "./DataUser";

const Home = ({ user, user_id }) => {
  const [activeUser, setActiveUser] = useState();
  useEffect(() => {
    Axios.get("http://localhost:3001/login")
      .then((res) => {
        console.log(res);
        setActiveUser(res.data.user[0].is_active);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {activeUser === "yes" && <DataUser user_id={user_id} />}
      {activeUser === "no" && <RegisterStudent user={user} user_id={user_id} />}
    </>
  );
};

export default Home;
