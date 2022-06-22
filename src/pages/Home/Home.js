import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

import { Button } from "react-bootstrap";

function Home() {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/selectdifficulty");
  };

  return (
    <section className="home-container">
      <div className="home-buttons">
        <Button className="start-quiz" onClick={startQuiz}>
          Start Quiz
        </Button>
        <Button className="login">Login</Button>
      </div>
      {/* <img alt='world-image' src={worldImg}/> */}
    </section>
  );
}

export default Home;
