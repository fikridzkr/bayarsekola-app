import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Services from "../components/Services";
function Home() {
  return (
    <div className="text-center App">
      <Navigation />
      <Header />
      <Services />
      <About />
      <Footer />
    </div>
  );
}

export default Home;
