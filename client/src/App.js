import React from "react";

import Chart from "./components/Chart";

import "bulma/css/bulma.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Bar Chart Race</h1>
          </div>
        </div>
      </section>
      <section className="hero is-light">
        <div className="hero-body">
          <div className="container">
            <Chart />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
