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
      {/* <img alt='world-image' src={worldImg}/> */}
    </section>
  );
}

export default Home;
