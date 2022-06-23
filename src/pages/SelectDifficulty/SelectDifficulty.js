import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SelectDifficulty.css";

import { useStateContext } from "../../context/StateContext";

import { Button } from "react-bootstrap";

const SelectDifficulty =()=> {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const {
    levelSelected,
    setLevelSelected,
    setTimerNum,
    fetchQuestions,
  } = useStateContext();

  useEffect(() =>{
    setLevelSelected(null)
    fetchQuestions()
  }, [])


  const navigate = useNavigate()

  const easyMode = () => {
    setLevelSelected("easy");
    setTimerNum(30)
    setButtonDisabled(false)
  };

  const normalMode = () => {
    setLevelSelected("normal");
    setTimerNum(20)
    setButtonDisabled(false)
  };

  const hardMode = () => {
    setLevelSelected("hard");
    setTimerNum(10)
    setButtonDisabled(false)
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
	  	<Button onClick={startQuiz} disabled={buttonDisabled}>Start</Button>
	  </div>
    </section>
  );
}

export default SelectDifficulty;
