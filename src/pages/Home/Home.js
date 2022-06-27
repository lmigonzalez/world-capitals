import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

import { Button } from "react-bootstrap";

import { useStateContext } from "../../context/StateContext";


function Home() {
  const navigate = useNavigate();
  const {
    isLogin,
  } = useStateContext();

  useEffect(()=>{

  }, [isLogin])

  const startQuiz = () => {

    navigate("/selectdifficulty");
  };

  const goToLogin = () =>{
    navigate("/login");
  }

  return (
    <section className="home-container">

      <div className="home-buttons">
        <Button className="start-quiz" onClick={startQuiz}>
          Start Quiz
        </Button>
        {!isLogin && <Button className="login" onClick={goToLogin}>Login</Button>}
        
      </div>
      <div className="about-section">
        <h2> About World Capitals</h2>
        <p>World Capitals is an educational game where you must choose the capital from 4 options of the provided country.</p>
        <p>You can choose between 3 levels of difficulty. Each level varies in the time given to select the answer:</p>
        <ul>
          <li>Easy: 30 seconds</li>
          <li>Normal: 20 seconds</li>
          <li>Hard: 10 seconds</li>
        </ul>

        <p>Once you start the quiz, you must select the capital of 20 different countries. If you have not chosen when time runs out, you will automatically be directed to the next question. If you leave the quiz, you will lose all process.</p>

        <p>Once you finish the 20 questions, you can see the result.
        Each question answered correctly scores 5 points.</p>

        <p>If you want to measure yourself against other players, you can register, and your name will appear in the Leaderboards table with the points you have obtained and the rank you belong to.</p>
      </div>
    </section>
  );
}

export default Home;
