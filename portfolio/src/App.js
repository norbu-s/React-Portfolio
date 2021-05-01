import React from "react";
import { HashRouter as Router, Switch, Route} from "react-router-dom";
import About from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import "../src/App.css";

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/aboutme">
            <About />
          </Route>
            <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
