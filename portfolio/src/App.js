import React from "react";
import { HashRouter as Router, Switch, Route} from "react-router-dom";
import About from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header"
import Footer from "./components/Footer"

import "../src/App.css";

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Header />
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
