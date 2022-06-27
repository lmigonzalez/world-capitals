import React, { createContext, useContext, useState, useEffect } from "react";
import {
  fetchQuestions,
  getRandomQuestions,
  questionToPlay,
} from "../utilities/Utilities";
import axios from "axios";
const Context = createContext();

export const StateContext = ({ children }) => {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  let questions;
  // console.log(randomQuestion)

  const fetchQuestions = () => {
    axios
      .get("http://localhost:3000/api/questions")
      .then((res) => {
        questions = res.data;
      })
      .then(() => {
        setSelectedQuestions(questionToPlay(getRandomQuestions(), questions));
      })
      .catch((err) => {
        console.log("ERROR!!!");
      });
  };

  const [progressBarWidth, setProgressBarWidth] = useState(5);
  const [resultArray, setResultArray] = useState([]);
  const [levelSelected, setLevelSelected] = useState(null);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [name, setName] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState(null);
  const [userPoints, setUserPoints] = useState(0);
  const [gamesPlayed, setGamesPlayed] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [userDataToUpdate, setUserDataToUpdate] = useState({});

  const percent = () => {
    setProgressBarWidth(progressBarWidth + 5);
  };

  const [timerNum, setTimerNum] = useState(20);


  return (
    <Context.Provider
      value={{
        questions,
        selectedQuestions,
        progressBarWidth,
        resultArray,
        timerNum,
        levelSelected,
        token,
        userId,
        name,
        isLogin,
        userName,
        userPoints,
        gamesPlayed,
        correctAnswers,
        userDataToUpdate,
        setToken,
        setUserId,
        setName,
        setIsLogin,
        setUserName,
        setUserPoints,
        setGamesPlayed,
        setCorrectAnswers,
        setProgressBarWidth,
        percent,
        setResultArray,
        setTimerNum,
        setSelectedQuestions,
        setLevelSelected,
        fetchQuestions,
        setUserDataToUpdate,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
