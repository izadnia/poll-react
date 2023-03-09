import React, { useEffect } from "react";
import "./styles/pages.css";
import Questions from "../services/data.json";

function PageQ(status) {
  useEffect(() => {}, [status]);
  return (
    <div className="container">
      {Questions.QuestionQuery.map((data) => (
        <div
          key={data.id}
          id={data.id}
          className={
            "section " + (data.number == status.props ? "active" : null)
          }
        >
          {data.title}
          {data.questions.map((q) => (
            <div key={q.question}>
              <p>{q.question}</p>
              {q.type == "text" ? (
                <input></input>
              ) : (
                <select>
                  {q.choices.map((choice) => (<option key={choice}>{choice}</option> ))}
                </select>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default PageQ;
