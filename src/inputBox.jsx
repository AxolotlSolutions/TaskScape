import './styles.scss';
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Homepage from "./Homepage.jsx"

class Input extends React.Component {

    render(){
        <form >
            <label>enter things to do</label>
            <input type="text" id="todo" />
        </form>
    }
}
export default Input;