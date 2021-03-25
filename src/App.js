import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Services from "./components/Services";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Services />
      <About />
    </div>
  );
}

export default App;
