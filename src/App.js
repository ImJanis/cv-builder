import React, { Component } from "react";
import Main from "./components/Main";
import Header from "./components/Header";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
