import React from "react";
import './App.css';
import Hero from "./components/Hero/Hero";
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from "react-router-dom";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import ScrollToBottom from "./components/ScrollToBottom/ScrollToBottom";
// import { MediaPlayer, MediaProvider } from "@vidstack/react";
// import { defaultLayoutIcons, DefaultVideoLayout } from
// "@vidstack/react/player/layouts/default";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Video from "./pages/Video/Video";
// import Gigs from "./components/Gigs/Gigs"
import Privacy from "./pages/Privacy/Privacy";
import Term from "./pages/Term/Term";
import Footer from "./components/Footer/Footer";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api`)
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
    <div className="App">
      <Router>
        <ScrollUp />
        {/* <ScrollToBottom /> */}
        <Header />
        {/* <Gigs /> */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<About />} />
        <Route path="/Video" element={<Video />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Term" element={<Term />} />
      </Routes>
      <Footer />
      </Router>
      {/* <Gigs /> */}
      {/* <Footer /> */}
      {/* <ScrollRestoration
        getKey={(location, matches) => {
          return location.pathname;
        }}
      /> */}
      {/* <ScrollRestoration
      getKey={(location, matches) => {
        return location.key;
      }}
      /> */}
    </div>
    {/* <ScrollRestoration
        getKey={(location, matches) => {
          return location.pathname;
        }}
      /> */}
    {/* <ScrollRestoration
      getKey={(location, matches) => {
        return location.key;
      }}
      /> */}
    </>
  );
};

export default App;
