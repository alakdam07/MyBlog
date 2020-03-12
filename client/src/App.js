import React from "react";
import "./App.css";
import Form from "./Form";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route>
          <Switch>
            <Route path="/" component={Form} exact />
          </Switch>
        </Route>
      </div>
    </Router>
  );
}

export default App;
