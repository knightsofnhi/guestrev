import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RevTable from "../src/components/revTable";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Guestrev</h2>
        </div>
        <p className="App-intro">

         <RevTable/>

        </p>
      </div>
    );
  }
}

export default App;
