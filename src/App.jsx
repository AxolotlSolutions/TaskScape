import './styles.scss';
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Homepage from "./Homepage.jsx"
import Input from './inputBox'

function App() {
  return(
    <div>
      Hello
     
    </div>
  )
}


// Renders an 'app' component to the index.html
ReactDOM.render(<App />, document.getElementById("app"));