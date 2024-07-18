import React from "react";
import './App.css';
import Hero from "./components/Hero/Hero";

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
    </div>
  );
}

export default App;
