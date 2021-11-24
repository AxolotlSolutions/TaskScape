import "./styles.scss";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import LoginPage from "./LoginPage.jsx";
import { useState } from "react";
import MainContainer from "./components/MainContainer.jsx";

function App() {
  return(
    
    <div>
      <h1><center>I Need An Adult!</center></h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <LoginPage />
      </nav>
      <MainContainer />
    </div>
  )
}


// Renders an 'app' component to the index.html
ReactDOM.render(<App />, document.getElementById("app"));