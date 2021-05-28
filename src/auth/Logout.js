import Axios from 'axios';

const Logout = () => {
  Axios.get('http://localhost:3001/logout')
    .then((res) => {
      console.log(res);
      window.location.href = '/';
    })
    .catch((err) => {
      console.log(err);
    });
};

export default Logout;
