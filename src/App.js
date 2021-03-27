import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact="true" component={Home} />
        <Route path="/login" exact="true" component={Login} />
        <Route path="/Register" exact="true" component={Register} />
      </div>
    </Router>
  );
}

export default App;
