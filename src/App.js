import React from "react";
import './App.css';
import Hero from "./components/Hero/Hero";
import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header/Header"
// import HeaderHook from "./components/HeaderHook/HeaderHook";
import About from "./pages/About/About";
import Why from "./pages/Why/Why";
import Plans from "./pages/Plans/Plans";
import Testimonials from "./pages/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      {/* <Header /> */}
      {/* <HeaderHook /> */}
      {/* <Hero /> */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="About" element={<About />} />
        <Route path="Why" element={<Why />} />
        <Route path="Plans" element={<Plans />} />
        <Route path="Testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
