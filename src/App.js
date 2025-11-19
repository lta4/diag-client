import React from "react";
import './App.css';
import Hero from "./components/Hero/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import MinimalLayout from './layouts/MinimalLayout';
import ScrollUp from "./components/ScrollUp/ScrollUp";
// import { MediaPlayer, MediaProvider } from "@vidstack/react";
// import { defaultLayoutIcons, DefaultVideoLayout } from
// "@vidstack/react/player/layouts/default";
import LinkTree from "./pages/LinkTree/LinkTree";
import About from "./pages/About/About";
import Video from "./pages/Video/Video";
import Privacy from "./pages/Privacy/Privacy";
import Term from "./pages/Term/Term";
 

function App() {
  // API response state not currently used in UI
  const [, setData] = React.useState(null);

  React.useEffect(() => {
    const apiBase = process.env.REACT_APP_API_URL;
    if (!apiBase) {
      console.warn('REACT_APP_API_URL not set - skipping /api fetch');
      return;
    }

    fetch(`${apiBase}/api`)
      .then(async (res) => {
        if (!res.ok) throw new Error(`API returned status ${res.status}`);
        const ct = res.headers.get('content-type') || '';
        if (ct.includes('application/json')) return res.json();
        const text = await res.text();
        console.error('Expected JSON from API but got:', text.slice(0, 500));
        throw new Error('Invalid JSON response from API');
      })
      .then((data) => setData(data.message))
      .catch((err) => console.error('API fetch error:', err));
  }, []);

  return (
    <>
      <div className="App">
        <Router>
          <ScrollUp />
          {/* <ScrollToBottom /> */}
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Hero />} />
              <Route path="/About" element={<About />} />
              <Route path="/Video" element={<Video />} />
              <Route path="/Privacy" element={<Privacy />} />
              <Route path="/Term" element={<Term />} />
            </Route>
            <Route element={<MinimalLayout />}>
              <Route path="/LinkTree" element={<LinkTree />} />
            </Route>
          </Routes>
        </Router>
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
