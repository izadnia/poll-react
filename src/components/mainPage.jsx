import React, { useEffect, useState } from "react";
import PageQ from './PageQ';
import SlidePage from "./SidePage";
import "./styles/main.css";

function Main() {
  let [status, setStatus] = useState(0);

  useEffect(() => {
  }, [status]);

  return (
    <div className="main">
      <div className="columns">
        <div className="questions">
          <PageQ props={status} />
          <div className="controllers">
            {status == 0 ? (
              <div>
                <button onClick={() => setStatus(1)}> Start </button>
              </div>
            ) : 
            <><div>
                <button onClick={() => setStatus(status = status - 1)}> Before </button>
              </div><div>
                  <button onClick={() => setStatus(status = status + 1)} > Next </button>
                </div><div>
                  <button> Submit </button>
                </div></>
            }
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
