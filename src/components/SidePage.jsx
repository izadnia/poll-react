import React, { useEffect } from "react";
import "./styles/side.css";

function SlidePage(status) {

  let data =[{
    'id':'0',
    'name':'General',
    'src':'src/assets/progress.png',
    'status':'null'
  },{
    'id':'1',
    'name':'Quality',
    'src':'src/assets/desktop.png',
    'status':'null'
  },{
    'id':'2',
    'name':'Production',
    'src':'src/assets/dashboard.png',
    'status':'null'
  },{
    'id':'3',
    'name':'Devices',
    'src':'src/assets/devices.png',
    'status':'null'
  },{
    'id':'4',
    'name':'Delay',
    'src':'src/assets/clock.png',
    'status':'null'
  },{
    'id':'5',
    'name':'Comment',
    'src':'src/assets/personal.png',
    'status':'null'
  },]
  useEffect(() => {

  }, [status.props]);

  return (
    <div className="column">
      <div className="container">

        {data.map((data)=> (
          <div key={data.id} id={'nav'+data.id} className={'step'+' '+ (data.id==status.props ? 'active' : null )}>
            <div className="card">
              <div className="wrapper">
                <div className="cover-text">
                  <p className={"text " + (data.id < status.props ? 'passed' : null) } >{data.name}</p>
                </div>
              </div>
              <img src={data.src} className="character" />
            </div>

        </div>
        ))}


        

      </div>
    </div>
  );
}

export default SlidePage;
