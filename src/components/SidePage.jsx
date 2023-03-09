import React from "react";
import "./styles/side.css";

function SlidePage() {
  return (
    <div className="column">
      <div className="container">
        
        <div className="step">
          <a
            href="#"
            alt="Mythrill"
            target="_blank"
          >
            <div class="card">
              <div class="wrapper">
                <div className="cover-text">
                    <p className="text">
                      General
                    </p>
                </div>
              </div>

              <img
                src="src/assets/progress.png"
                class="character"
              />
            </div>
          </a>
        </div>
        <div className="step">
          <a
            href="#"
            alt="Mythrill"
            target="_blank"
          >
            <div class="card">
              <div class="wrapper">
                <div className="cover-text">
                    <p className="text">
                      Quality
                    </p>
                </div>
              </div>

              <img
                src="src/assets/desktop.png"
                class="character"
              />
            </div>
          </a>
        </div>
        <div className="step">
          <a
            href="#"
            alt="Mythrill"
            target="_blank"
          >
            <div class="card">
              <div class="wrapper">
                <div className="cover-text">
                    <p className="text">
                      Production
                    </p>
                </div>
              </div>

              <img
                src="src/assets/dashboard.png"
                class="character"
              />
            </div>
          </a>
        </div>
        <div className="step">
          <a
            href="#"
            alt="Mythrill"
            target="_blank"
          >
            <div class="card">
              <div class="wrapper">
                <div className="cover-text">
                    <p className="text">
                      Devices
                    </p>
                </div>
              </div>

              <img
                src="src/assets/devices.png"
                class="character"
              />
            </div>
          </a>
        </div>
        <div className="step">
          <a
            href="#"
            alt="Mythrill"
            target="_blank"
          >
            <div class="card">
              <div class="wrapper">
                <div className="cover-text">
                    <p className="text">
                      Delay
                    </p>
                </div>
              </div>

              <img
                src="src/assets/clock.png"
                class="character"
              />
            </div>
          </a>
        </div>
        <div className="step">
          <a
            href="#"
            alt="Mythrill"
            target="_blank"
          >
            <div class="card">
              <div class="wrapper">
                <div className="cover-text">
                    <p className="text">
                      Comment
                    </p>
                </div>
              </div>

              <img
                src="src/assets/personal.png"
                class="character"
              />
            </div>
          </a>
          
        </div>
      </div>
    </div>
  );
}

export default SlidePage;
