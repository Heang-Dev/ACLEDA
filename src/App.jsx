import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Content />
      <About />
      <Footer />
    </main>
  );
};

export default App;
