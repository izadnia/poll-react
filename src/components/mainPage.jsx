import React, { useEffect, useState } from "react";
import Page1 from "./Page1";
import SlidePage from "./SidePage";
import "./styles/main.css";

function Main() {
  useEffect(() => {}, []);

  return (
    <div className="main">
      <div className="columns">
        <div className="questions">
          <Page1 />
          <div className="controllers">
            <div>
              <button onClick={() => console.log("hi")}> Start </button>
            </div>
            <div>
              <button> Before </button>
            </div>
            <div>
              <button> Next </button>
            </div>

            <div>
              <button> Submit </button>
            </div>
          </div>
        </div>
        <div className="Slide">
          <SlidePage />
        </div>
      </div>
    </div>
  );
}

export default Main;
