import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import RevTable from "../src/components/revTable";
import "./App.css";
import NavBar from "../src/components/navBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <img src={require('../src/cendyn logo.jpg')}
        className="App-logo" alt="logo" />
          <h2>Welcome to Guestrev</h2>
        </div>

        <NavBar/>
        <RevTable/>
         

      </div>
      
    );
  }
}

export default App;
