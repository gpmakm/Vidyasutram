"use client"

import React, { useState, useEffect } from "react";
import questions from "../../../../public/Files/digital_electronics_mcqs.json";
import '../../globals2.css'
const Page = () => {
  const [randomQuestions, setRandomQuestions] = useState([]);

  useEffect(() => {
    // Shuffle questions
    let shuffled = [...questions].sort(() => Math.random() - 0.5);

    // Limit (optional) – for example 20 random questions
    shuffled = shuffled.slice(0, 20);

    setRandomQuestions(shuffled);
  }, []); // runs only after reload

  return (
    <div>
      {randomQuestions.map((elem, index) => (
        <div key={index} className="card">
          <h3>{elem.question}</h3>

          <div className="options">
            {elem.options.map((opt, idx) => (
              <p key={idx}>{opt}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
