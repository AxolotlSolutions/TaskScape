import './styles.scss';
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Homepage from "./Homepage.jsx"

function App() {
  return(
    <div>
      <LoginPage />
    </div>
  )
}

console.log('HELLO WORLD')

// Renders an 'app' component to the index.html
ReactDOM.render(<App />, document.getElementById("app"));