import React, { useEffect, useState } from "react";
import PageQ from "./PageQ";
import SlidePage from "./SidePage";
import "./styles/main.css";

function Main() {
  let [status, setStatus] = useState(-1);



  function countdown() {
    let targetDate = new Date().getTime() + 121000;
    setInterval(function () {
      const now = new Date().getTime();
      const difference = targetDate - now;
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      difference > 0 ? (document.getElementById("time").innerHTML = minutes + ":" + seconds + " min") : null;
      if (difference < 0) {
          setStatus("submited") 
          setTimeout(()=>{
            document.getElementById("time").innerHTML = "Finished"
          }, 1000)
      }
    }, 1000);
  }

  

  useEffect(() => {}, [status]);

  return (
    <div className="main">
      <div id="col" className="columns">
        <div className="questions">
          <p id="Timer">Time : <span style={{ color: "darkred" }} id="time">02:00 min</span></p>
          <PageQ props={status} />
          <div className="controllers">
            {status == -1 ? (
              <button
                style={{ background: "darkgreen" }}
                onClick={() =>
                  setTimeout(() => {
                    setStatus(0);
                    countdown();
                  }, 1000)
                }
              >
                Start
              </button>
            ) : null}
            {0 < status && status < 6 ? (
              <button
                style={{ background: "gray" }}
                onClick={() => setStatus((status = status - 1))}
              >
                Previous
              </button>
            ) : null}
            {-1 < status && status < 5 ? (
              <button onClick={() => setStatus((status = status + 1))}>
                Next
              </button>
            ) : null}
            {status == 5 ? (
              <button
                onClick={() => (setStatus("submited") , (document.getElementById("Timer").style.display='none'))}
                style={{ background: "green" }}
              >
                {" "}
                Submit{" "}
              </button>
            ) : null}
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
