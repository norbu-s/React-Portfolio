import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./components/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Portfolio />
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
