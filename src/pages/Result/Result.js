import React, {useState, useEffect} from "react";
import axios from "axios";
import "./Result.css";
import { useNavigate } from "react-router-dom";
import { BsCheckLg, BsXCircleFill } from "react-icons/bs";
import { Button } from "react-bootstrap";

import { useStateContext } from "../../context/StateContext";


function Result() {
  const { 
    token,
    userId,
    resultArray,
    userPoints,
		gamesPlayed,
		correctAnswers,
    setUserPoints,
		setGamesPlayed,
		setCorrectAnswers,
    setUserDataToUpdate,
  } = useStateContext();
  const navigate = useNavigate();


  useEffect(()=>{
    updateUserValue()
  }, [])


  const randomKeyNum = () => {
    let key = Math.random() * 1000;

    return key;
  };

  const handleExit = () => {
    navigate("/");
  };

  const handleTryAgain = () => {
    navigate("/selectdifficulty");
  };

  const answerAndPoints = () => {
    let array = [];
    let correctAnswers = 0;
    let resultPoints = 0;
    let num = 0;

    for (let data of resultArray) {
      if (data.yourAnswer === data.correctAnswer) {
        num++;
      }
    }

	correctAnswers += num
	resultPoints = 5 * num
	array.push(correctAnswers)
	array.push(resultPoints)

	return array
  };


  
  const updateUserValue = () =>{

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    let userDataToUpdate = {
      points: userPoints + answerAndPoints()[1],
      gamesPlayed: gamesPlayed + 1,
      correctAnswers: correctAnswers + answerAndPoints()[0]
    }

    axios.patch(`http://localhost:3000/api/updatevalues/${userId}`, userDataToUpdate, config)
    .then(res=>{
      console.log(res.data)

    }).catch(err=>{
      console.log(err)
    })
    console.log(userDataToUpdate)
  }

  return (
    <section className="result-container">
      <div className="result-content">
        <div className="result-details">
          <p className="correct-result">{`${answerAndPoints()[0]} from ${resultArray.length}`}</p>
          <p>{`Points: ${answerAndPoints()[1]}`}</p>
        </div>
        <table className="result-table">
          <thead>
            <tr>
              <th>Result</th>
              <th>Country</th>
              <th>Your Answer</th>
              <th>Correct Answer</th>
            </tr>
          </thead>

          <tbody>
            {resultArray.map((data) => {
              return (
                <tr key={randomKeyNum()}>
                  <td>
                    {data.yourAnswer === data.correctAnswer ? (
                      <BsCheckLg className="correct-icon" />
                    ) : (
                      <BsXCircleFill className="incorrect-icon" />
                    )}
                  </td>
                  <td> {data.country} </td>
                  <td> {data.yourAnswer} </td>
                  <td> {data.correctAnswer} </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="result-buttons">
          <Button onClick={handleExit}>Exit</Button>
          <Button onClick={handleTryAgain}>Try Again</Button>
        </div>
      </div>
    </section>
  );
}

export default Result;
