import React, { useEffect, useState } from "react";
import PageQ from "./PageQ";
import SlidePage from "./SidePage";
import "./styles/main.css";

function Main() {
  let [status, setStatus] = useState(-1);


  useEffect(() => {}, [status]);

  return (
    <div className="main">
      <div className="columns">
        <div className="questions">
        <p>( 2min Countdown here)</p>
          <PageQ props={status} />
          <div className="controllers">
            {(status == -1) ? <button onClick={() => setTimeout(()=>{setStatus(0) },2000)}> Start </button> : null}
            {( 0< status && status < 6 ) ? <button onClick={() => setStatus((status = status - 1))}>Before</button>:null}
            { (-1 < status && status < 5) ? <button onClick={() => setStatus((status = status + 1))}>Next</button>: null}
            {(status == 5) ? <button> Submit </button> : null}
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
