import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Tasks() {
  return (
    <div className="taskContainer">
      <h1 id="mainTitle">“You might be a Slytherin.”</h1>
      <h2>
        <i>
          “Deep into that darkness peering, long I stood there, wondering,
          fearing, doubting, dreaming dreams no mortal ever dared to dream
          before.”
        </i>
      </h2>
      <div className="houseBox">
        <div className="flag" id="flagS"></div>

        <div className="info" id="infoS">
          {/* <img src='https://i.ibb.co/qjwrPRc/s-TEST.png'></img> */}
          <h1 id="mainTitle">
            "Or perhaps in Slytherin, You'll make your real friends, Those
            cunning folk use any means, To achieve their ends."
          </h1>
          <p>
            <strong>House Mascot: </strong>
          </p>
          <p>
            <strong>House Colors: </strong>
          </p>
          <p>
            <strong>House Founder: </strong>
          </p>
          <p>
            <strong>Notable Alumni:</strong>
          </p>
          <p>
            <strong>House Traits: </strong>
          </p>
        </div>
      </div>
    </div>
  );
}
