import React, { useState, useEffect } from "react";
import "./Quiz.css";

import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import ProgressBar from "../../components/ProgressBar";


import { getRandomOptions } from "../../utilities/Utilities";

import { useStateContext } from "../../context/StateContext";

function Quiz() {
  const navigate = useNavigate();

  const {
    selectedQuestions,
    setProgressBarWidth,
    percent,
    resultArray,
    setResultArray,
    timerNum,

  } = useStateContext();

  const [optionSelected, setOptionSelected] = useState(null);
  const [num, setNum] = useState(timerNum);
  const [questionNum, setQuestionNum] = useState(0);
  const [randomOpt, setRandomOpt] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [timer, setTimer] = useState();

  useEffect(() => {
    setResultArray([]);
    // countDown();
  }, []);

  useEffect(() => {
    // countDown();
  }, [num]);

  useEffect(() => {
    randomOption();
  }, [questionNum]);

  const countDown = () => {
    if (num > 0) {
      setTimer(
        setTimeout(() => {
          setNum(num - 1);
        }, 1000)
      );
    }

    if (num === 0) {
      nextQuestion();
    }
    return num;
  };

  const handleExit = () => {
    navigate("/");
    setProgressBarWidth(5);
  };

  const randomOption = () => {
    let newArray = [];
    let randomArray = getRandomOptions();
    let options = [
      selectedQuestions[questionNum].option1,
      selectedQuestions[questionNum].option2,
      selectedQuestions[questionNum].option3,
      selectedQuestions[questionNum].option4,
    ];
    randomArray.forEach((element) => {
      newArray.push(options[element]);
    });
    setRandomOpt(newArray);
  };

  const nextQuestion = () => {
    let obj = {
      country: selectedQuestions[questionNum].country,
      yourAnswer: optionSelected,
      correctAnswer: selectedQuestions[questionNum].correct_answer,
    };

    setResultArray([...resultArray, obj]);

    setOptionSelected(null);
    if (questionNum === 19) {
      navigate("/result");
      setProgressBarWidth(5);
      return;
    }

    setRandomOpt([]);
    setQuestionNum(questionNum + 1);
    setNum(timerNum);
    percent();
    randomOption();
    setButtonDisabled(true);
    clearTimeout(timer);
  };

  //   console.log(selectedQuestions)
  //   console.log(questionNum)

  const selectOption = (e) => {
    let name = e.target.value;
    setOptionSelected(name);
    setButtonDisabled(false);
  };

  return (
    <section className="quiz-container">
      <ProgressBar />
      <div className="quiz-timer">{`0:${num}`}</div>
      <div className="quiz-content">
        <h2 className="country-name">
          {selectedQuestions[questionNum].country}
        </h2>
        <div className="quiz-choice">
          <Button value={randomOpt[0]} onClick={selectOption}>
            <div className="button-radio" value="hello">
              {optionSelected === randomOpt[0] ? <div></div> : <></>}
            </div>
            {randomOpt[0]}
          </Button>

          <Button value={randomOpt[1]} onClick={selectOption}>
            <div className="button-radio">
              {optionSelected === randomOpt[1] ? <div></div> : <></>}
            </div>
            {randomOpt[1]}
          </Button>

          <Button value={randomOpt[2]} onClick={selectOption}>
            <div className="button-radio">
              {optionSelected === randomOpt[2] ? <div></div> : <></>}
            </div>
            {randomOpt[2]}
          </Button>

          <Button value={randomOpt[3]} onClick={selectOption}>
            <div className="button-radio">
              {optionSelected === randomOpt[3] ? <div></div> : <></>}
            </div>
            {randomOpt[3]}
          </Button>
        </div>
        <div className="control-buttons">
        <Button onClick={handleExit} className="exit-questions">
            Exit
          </Button>
          <Button
            onClick={nextQuestion}
            disabled={buttonDisabled}
            className="next-question"
          >
            Next
          </Button>
          
        </div>
      </div>

    </section>
  );
}

export default Quiz;
