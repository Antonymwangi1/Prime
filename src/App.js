import React from "react";
import "./App.css";
import Landing from "./components/Landing";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Header />
        <Landing />
      </React.StrictMode>
    </div>
  );
}

export default App;
