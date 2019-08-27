import React from "react";
import Login from "./login";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Login
        user={props.user}
        onLogin={props.onLogin}
        onLogout={props.onLogout}
      />
    </nav>
  );
}

export default Nav;
