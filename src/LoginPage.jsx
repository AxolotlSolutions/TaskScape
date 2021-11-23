import './styles.scss';
import React from 'react';
import NavBar from "./SiteMapping.jsx";
import TasksPage from './routes/TaskPage.jsx';
import Calendar from './routes/CalendarPage.jsx';
import RewardsPage from './routes/RewardsPage.jsx';
import TaskArchive from './routes/TaskArchive.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Parallax } from "react-parallax";

// import ReactDOM from "react-dom";

export default function LoginPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route exact path="/tasks" element={<TasksPage />} />
        <Route exact path="/calendar" element={<Calendar />} />
        <Route exact path="/rewards" element={<RewardsPage />} /> 
        <Route exact path="/taskarchive" element={<TaskArchive />} /> 
      </Routes>
    </BrowserRouter>
  );
}