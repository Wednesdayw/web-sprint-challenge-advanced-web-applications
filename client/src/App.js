import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to the Bubble App!</h1>
        <Link to="/login">
          <p>Login</p>
        </Link>
        <Link to="/bubblePage">
          <p>BubblePage</p>
        </Link>
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/bubblePage">
          <BubblePage />
        </PrivateRoute>
      </div>
    </Router>
  );
}

export default App;