import React, { useState, useEffect } from "react";
import "./Quiz.css";

import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import ProgressBar from "../../components/ProgressBar";

import { useStateContext } from "../../context/StateContext";

function Quiz() {
  const navigate = useNavigate()
  const { selectedQuestions, setProgressBarWidth, percent, resultArray, setResultArray } = useStateContext();
  const [optionSelected, setOptionSelected] = useState(null);
  const [num, setNum] = useState(20);
  const [questionNum, setQuestionNum] = useState(0);
  const [array, setArray] = useState([])


  useEffect(() => {
    countDown();
  }, [num]);

  useEffect(()=>{
	setResultArray([])
  }, [])


let timer

  const countDown = () => {
    if (num > 0) {
      timer = setTimeout(() => {
        setNum(num - 1);
      }, 1000);
    }

	if(num === 0){
		nextQuestion()
	}
    return;
  };

  const handleExit = () =>{
	  navigate('/')
	  setProgressBarWidth(20)
  }

  

  const nextQuestion = () => {

	let obj = {
		country: selectedQuestions[questionNum].countryName,
		yourAnswer: optionSelected,
		correctAnswer: selectedQuestions[questionNum].correctAnswer,
	}
	
	setResultArray([
		...resultArray, obj 
	])


	  setOptionSelected(null)
	//   console.log(optionSelected)
    if (questionNum === 4) {
		console.log('done!')
      navigate('/result')
	  setProgressBarWidth(20)
	  return
    }
    setQuestionNum(questionNum + 1);
    setNum(20);
	clearTimeout(timer)
	percent()
	
  };

  const selectOption = (e) => {
    let name = e.target.value;
    setOptionSelected(name);
  };

//   console.log(barWidthPercent)
  return (
    <section className="quiz-container">
      <ProgressBar/>
      <div className="quiz-timer">{`0:${num}`}</div>
      <div className="quiz-content">
        <h2 className="country-name">
          {selectedQuestions[questionNum].countryName}
        </h2>
        <div className="quiz-choice">
          <Button
            value={selectedQuestions[questionNum].option1}
            onClick={selectOption}
          >
            <div className="button-radio" value="hello">
              {optionSelected === selectedQuestions[questionNum].option1 ? (
                <div></div>
              ) : (
                <></>
              )}
            </div>
            {selectedQuestions[questionNum].option1}
          </Button>

          <Button
            value={selectedQuestions[questionNum].option2}
            onClick={selectOption}
          >
            <div className="button-radio">
              {optionSelected === selectedQuestions[questionNum].option2 ? (
                <div></div>
              ) : (
                <></>
              )}
            </div>
            {selectedQuestions[questionNum].option2}
          </Button>

          <Button
            value={selectedQuestions[questionNum].option3}
            onClick={selectOption}
          >
            <div className="button-radio">
              {optionSelected === selectedQuestions[questionNum].option3 ? (
                <div></div>
              ) : (
                <></>
              )}
            </div>
            {selectedQuestions[questionNum].option3}
          </Button>

          <Button
            value={selectedQuestions[questionNum].option4}
            onClick={selectOption}
          >
            <div className="button-radio">
              {optionSelected === selectedQuestions[questionNum].option4 ? (
                <div></div>
              ) : (
                <></>
              )}
            </div>
            {selectedQuestions[questionNum].option4}
          </Button>
        </div>
        <div className="control-buttons">
          <Button onClick={handleExit}>Exit</Button>
          <Button onClick={nextQuestion}>Next</Button>
        </div>
      </div>
    </section>
  );
}

export default Quiz;
