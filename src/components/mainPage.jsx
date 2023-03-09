import React from "react";
import Control from "./Control";
import Page1 from './Page1';
import SlidePage from './SidePage';
import "./styles/main.css";

function Main() {
  return (
    <div className="main">
      <div className="columns">
        <div className="questions">
          <Page1 />
          <Control/>
        </div>
        <div className="Slide">
          <SlidePage />
        </div>
      </div>
    </div>
  );
}

export default Main;
