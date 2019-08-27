import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RevTable from "../src/components/revTable";
import Nav from "../src/components/nav";
import API from "./utils/api";

class App extends Component {
  state = {
    currentUser: undefined
  };

  handleLogin = (email, password) => {
    API.authUser(email.password)
      .then(res => this.setState({ currentUser: res.data }))
      .catch(() => {
        console.log("Wrong password");
      });
  };

  handleLogout = () => {
    this.setState({ currentUser: undefined });
  };

  render() {
    return (
      <div className="App">
        <Nav
          user={this.state.currentUser}
          onLogin={this.handleLogin}
          onLogout={this.handleLogout}
        />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Guestrev</h2>
        </div>

        <RevTable />
      </div>
    );
  }
}

export default App;
