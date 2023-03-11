import React, { useEffect } from "react";
import "./styles/pages.css";
import Questions from "../services/data.json";

function PageQ(status) {


let answers = {}
  function getAnswers(){
    {Questions.QuestionQuery.map((data) => (
        data.questions.map((q) => (
              answers[q["Q-num"]] =  document.getElementById(q["Q-num"]).value)
        ))
      
    )}
    console.log(answers)
  }


  useEffect(() => {
 
    {status.props == 'submited' ? getAnswers()  : null}
    
    
  }, [status]);


  return (
    <div className="container">
      
      { status.props == -1 ? (
          <div>
            <h1>Welcome</h1>
            <p>
              We would like thank you for your time,our team were wondering if
              you would be willing to answer a few questions that we have on a
              particular topic.This test will take about<span style={{color:'darkred'}}> 2 minutes</span>. Your expertise
              in this area would be invaluable to us and we would greatly appreciate
              your insights.
            </p>
            <p>
              We understand that you may have a busy schedule, so we completely
              understand if you are unable to assist at this time. However, if
              you are available, This would be grateful for the opportunity to
              learn from you.
            </p>
            <p>Whenever you ever you were ready?!! Click Start button</p>
          </div>
        ) : null
      }
      {Questions.QuestionQuery.map((data) => (
        <div
          key={data.id}
          id={data.id}
          className={
            "section " + (data.number == status.props ? "active" : null)
          }
        >
          <h3>{data.title}</h3>
          {data.questions.map((q) => (
            <div key={q.question}>
              <p>{q.question}</p>
              {q.type == "text" ? (
                <input id={q["Q-num"]}></input>
              ) : (
                <select id={q["Q-num"]}>
                  <option defaultValue> </option>
                  {q.choices.map((choice) => (
                    <option key={choice}>{choice}</option>
                  ))}
                </select>
              )}
            </div>
          ))}
        </div>
      ))}
    { status.props == 'submited' ? (<div><p>We have recieved your data</p><br/><p> check out Console by pressing F12 :) </p></div>) : null}
    </div>
  );
}

export default PageQ;
