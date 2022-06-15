import React, { useState, useEffect } from "react";
import "./Quiz.css";

import { Button } from "react-bootstrap";

import ProgressBar from "../../components/ProgressBar";

function Quiz() {
  const [optionSelected, setOptionSelected] = useState(null);
//   let num = 20
  const [num, setNum] = useState(20)
  const countries = {
    countryName: "Australia",
    option1: "Canberra",
    option2: "Seoul",
    option3: "Palikir",
    option4: "Nassau",
    correctAnswer: "Canberra",
  };

  useEffect(() =>{
	countDown()
  }, [num])

  const countDown = () =>{
	if(num > 0){
		setTimeout(()=>{
		  setNum(num - 1)
		}, 1000)
	  }
	  return
  }



  const selectOption = (e) => {
    let name = e.target.value;
    setOptionSelected(name);
  };

//   console.log(optionSelected)

  return (
    <section className="quiz-container">
      <ProgressBar />
      <div className="quiz-timer">{`0:${num}`}</div>
      <div className="quiz-content">
        <h2 className="country-name">{countries.countryName}</h2>
        <div className="quiz-choice">
          <Button value={countries.option1} onClick={selectOption}>
            <div className="button-radio" value="hello">
              {optionSelected === countries.option1 ? <div></div> : <></>}
            </div>
            {countries.option1}
          </Button>

          <Button value={countries.option2} onClick={selectOption}>
            <div className="button-radio">
              {optionSelected === countries.option2 ? <div></div> : <></>}
            </div>
            {countries.option2}
          </Button>

          <Button value={countries.option3} onClick={selectOption}>
            <div className="button-radio">
              {optionSelected === countries.option3 ? <div></div> : <></>}
            </div>
            {countries.option3}
          </Button>

          <Button value={countries.option4} onClick={selectOption}>
            <div className="button-radio">
              {optionSelected === countries.option4 ? <div></div> : <></>}
            </div>
            {countries.option4}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Quiz;
