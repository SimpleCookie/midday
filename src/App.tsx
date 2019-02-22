import React, { Component } from "react";
import logo from "./logo.svg";
import Countdown from "./countdown";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Är det middag?</h1>
        </header>
        <Countdown />
      </div>
    );
  }
}

export default App;
