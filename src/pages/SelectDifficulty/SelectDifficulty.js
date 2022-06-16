import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SelectDifficulty.css";

import { Button } from "react-bootstrap";
function SelectDifficulty() {
  const [levelSelected, setLevelSelected] = useState("normal");
  const navigate = useNavigate()

  const easyMode = () => {
    setLevelSelected("easy");
  };

  const normalMode = () => {
    setLevelSelected("normal");
  };

  const hardMode = () => {
    setLevelSelected("hard");
  };

  const startQuiz = () =>{
	navigate('/quiz')
  }

  return (
    <section className="difficulty-container">
      <h2>Select the difficulty level</h2>

      <div className="button-container">
        <Button onClick={easyMode}>
          {" "}
          <div className="button-radio">
		  {levelSelected === 'easy'? <div></div>: <></>}
          </div>
          Easy
        </Button>
        <Button onClick={normalMode}>
          {" "}
          <div className="button-radio">
			  {levelSelected === 'normal'? <div></div>: <></>}
            
          </div>
          Normal
        </Button>
        <Button onClick={hardMode}>
          {" "}
          <div className="button-radio">
		  {levelSelected === 'hard'? <div></div>: <></>}
          </div>
          Hard
        </Button>
      </div>
	  <div className="start-button">
	  	<Button onClick={startQuiz}>Start</Button>
	  </div>
    </section>
  );
}

export default SelectDifficulty;