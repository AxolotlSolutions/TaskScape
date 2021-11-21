import './styles.scss';
import React from 'react';
import NavBar from "./SiteMapping.jsx";
import Tasks from './routes/TaskPage.jsx';
import Calendar from './routes/CalendarPage.jsx';
import Rewards from './routes/RewardsPage.jsx';
import TaskArchive from './routes/TaskArchive.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Parallax } from "react-parallax";

// import ReactDOM from "react-dom";

export default function LoginPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route exact path="/tasks" element={<Tasks />} />
        <Route exact path="/calendar" element={<Calendar />} />
        <Route exact path="/rewards" element={<Rewards />} /> 
        <Route exact path="/taskarchive" element={<TaskArchive />} /> 
      </Routes>
    </BrowserRouter>
  );
}