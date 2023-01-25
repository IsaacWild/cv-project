import "./App.css";
import Header from "./components/Header.js";
import MainContent from "./components/MainContent.js";
import Footer from "./components/Footer.js";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
