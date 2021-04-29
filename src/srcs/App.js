import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Services from "./Services";
import Home from "./Home";
import Gallery from "./Gallery";
import Kudos from "./Kudos";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;

{
  /* <Router>
      <div className="app">
        <Switch>
          <Route path="/contact">
            <Header />
            <Contact />
          </Route>

          <Route path="/kudos">
            <Header />
            <Kudos />
          </Route>

          <Route path="/gallery">
            <Header />
            <Gallery />
          </Route>

          <Route path="/services">
            <Header />
            <Services />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router> */
}
