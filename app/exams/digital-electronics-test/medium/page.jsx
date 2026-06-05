"use client"
import '../../globals2.css'
import React from 'react'
import questions from "../../../../public/Files/digital_electronics_mcqs_medium.json";
import { useState, useEffect } from "react";
const Page = () => {
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});

  useEffect(() => {
    // Shuffle questions
    let shuffled = [...questions].sort(() => Math.random() - 0.5);

    // Limit (optional) – for example 20 random questions
    shuffled = shuffled.slice(0, 20);

    setRandomQuestions(shuffled);
  }, []); // runs only after reload
const handleSelect = (qId, answer) => {
  setSelectedOptions(prev => ({
    ...prev,
    [qId]: answer
  }));
  console.log(selectedOptions);
  
};

const handleSubmit=async ()=>{
  let answer=[];
  let req=await fetch('/backend/de-test/medium',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      questionIds:randomQuestions,
      answers:selectedOptions
    })
  })
  let res=await req.json();
  console.log(res);
  console.log(res.message);
  
}

  return (
    <div>
      {randomQuestions.map((elem, index) => (
        <div key={index} className="card">
          <h3>{elem.question}</h3>

          <div className="options">
            {elem.options.map((opt, idx) => (
            <div>
                  {/* <p key={idx}>{opt}</p> */}
              <label htmlFor={idx}  style={{ display: "block", margin: "5px 0" }}>
                <input type="radio" name={`question-${elem.id}`} id={idx} value={opt} checked={selectedOptions[elem.id]===opt} onChange={()=>{handleSelect(elem.id,opt)}} />
                {" "}
                {opt}
              </label>
            </div>
            ))}
          </div>
        </div>
      ))}
      <button type="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Page;
