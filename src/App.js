import React from "react";
import './App.css';
import Hero from "./components/Hero/Hero";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <Hero />
      <Routes>
        <Route path="About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
