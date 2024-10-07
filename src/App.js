import React from "react";
import './App.css';
import Hero from "./components/Hero/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import HeaderHook from "./components/HeaderHook/HeaderHook";
import About from "./pages/About/About";
import Video from "./pages/Video/Video";
// import Gigs from "./components/Gigs/Gigs"
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
      <Router>
        {/* <Header /> */}
        <HeaderHook />
        {/* <Gigs /> */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="About" element={<About />} />
        <Route path="Video" element={<Video />} />
      </Routes>
      </Router>
      {/* <Gigs /> */}
      <Footer />
    </div>
  );
}

export default App;
