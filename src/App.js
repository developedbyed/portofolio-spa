import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Route, Redirect } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/contact" exact component={Contact} />
      </div>
    );
  }
}
