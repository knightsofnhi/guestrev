import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RevTable from "../src/components/revTable";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="..\client\public\assets\img\cendyn.png" className="App-logo" alt="logo" />
          <h2>Welcome to Guestrev</h2>
        </div>
        <RevTable/>
         

      </div>
      
    );
  }
}

export default App;
