import React, { useEffect, useState } from "react";
import PageQ from "./PageQ";
import SlidePage from "./SidePage";
import "./styles/main.css";

function Main() {
  let [status, setStatus] = useState(-1);

  const targetDate = new Date().getTime() + 120000;

  function countdown(){
    setInterval(function () {
      const now = new Date().getTime();
      const difference = targetDate - now;
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      const mSeconds = Math.floor(((difference % (1000 * 60)) / 10) % 100);

      document.getElementById("time").innerHTML =minutes + "m  " + seconds + "s  ";
      document.getElementById("msec").innerHTML = mSeconds + "ms  ";
  
      if (difference < 0) {
        clearInterval(countdown);
        document.getElementById("col").innerHTML = "Time is up! we have recieved your answers! Thank you";

      }
    }, 1);
  };

  useEffect(() => {}, [status]);

  return (
    <div className="main">
      <div id="col" className="columns">
        <div className="questions">
          <p>
            Poll Ends in <span  style={{color:'darkred'}} id="time">02:00 min</span><span style={{fontSize:'0.6rem',color:'darkred'}} id="msec"></span>
          </p>
          <PageQ props={status} />
          <div className="controllers">
            {status == -1 ? (
              <button
              style={{background:'darkgreen'}}
                onClick={() =>
                  setTimeout(() => {
                    setStatus(0);
                    countdown()
                  }, 1000)
                }
              >
                Start
              </button>
            ) : null}
            {0 < status && status < 6 ? (
              <button style={{background:'gray'}} onClick={() => setStatus((status = status - 1))}>
                Before
              </button>
            ) : null}
            {-1 < status && status < 5 ? (
              <button  onClick={() => setStatus((status = status + 1))}>
                Next
              </button>
            ) : null}
            {status == 5 ? <button style={{background:'green'}}> Submit </button> : null}
          </div>
        </div>
        <div className="Slide">
          <SlidePage props={status} />
        </div>
      </div>
    </div>
  );
}

export default Main;
