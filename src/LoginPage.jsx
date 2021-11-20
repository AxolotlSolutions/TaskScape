import './styles.scss';
import React from 'react';
// import Alohomora from "./ALOHOMORA";
// import PickSnek from './routes/SLYTHERIN';
// import PickGryff from './routes/GRYFFINDOR';
// import PickHuff from './routes/HUFFLEPUFF';
// import PickRaven from './routes/RAVENCLAW';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Parallax } from "react-parallax";

// import ReactDOM from "react-dom";

export default function LoginPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/dashboard" element={<Alohomora />} /> 
        {/* <Route exact path="/seeslytherin" element={<PickSnek />} />
        <Route exact path="/seegryffindor" element={<PickGryff />} />
        <Route exact path="/seehufflepuff" element={<PickHuff />} /> 
        <Route exact path="/seeravenclaw" element={<PickRaven />} />  */}
      </Routes>
    </BrowserRouter>
  );
}