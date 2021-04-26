import Axios from "axios";

const Logout = () => {
  Axios.get("http://localhost:3001/logout")
    .then((res) => {
      console.log(res);
      window.location.href = "/dashboard";
    })
    .catch((err) => {
      console.log(err);
    });
};

export default Logout;
