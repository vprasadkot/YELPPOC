import React from "react";
import "./App.css";
import BusinessList from "./components/BusinessList";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello World</p>
      </header>
      <div className="container">
        <BusinessList />
      </div>
    </div>
  );
};

export default App;
