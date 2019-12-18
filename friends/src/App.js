import React, { Fragment } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";
import PrivateRoute from "./components/utils/PrivateRoute";
import Friends from "./components/Friends/Friends";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <PrivateRoute path="/protected" component={Friends} />
      </Switch>
    </div>
  );
}

export default App;