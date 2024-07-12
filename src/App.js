import React from "react";
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <div>
          <p>Hello Diagnostic</p>
        </div>
      {/* </header> */}
    </div>
  );
}

export default App;
