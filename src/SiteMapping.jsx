import React from 'react';
// import { useState } from 'react';
// import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function NavBar() {
    return (
        <div className="navContainer">
            <Link to="/tasks">
              <button className="btnDefault" id="taskBtn"></button>
            </Link>

            <Link to="/calendar">
              <button className="btnDefault" id="calBtn"></button>
            </Link>

            <Link to="/rewards">
              <button className="btnDefault" id="rewardsBtn"></button>
            </Link>

            <Link to="/taskarchive">
              <button className="btnDefault" id="archiveBtn"></button>
            </Link>
        </div>
      );
    }

export default NavBar;
