import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
// import Products from "./components/pages/Products";
// import SignUp from "./components/pages/SignUp";
import Gallery from "./components/pages/Gallery";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          {/* <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} /> */}

          <Route path="/contact" component={Contact} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
        <Footer />
      </Router>
      <a
        href="https://wa.me/919353515130"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </>
  );
}

export default App;
