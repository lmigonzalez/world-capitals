import React, { useEffect } from "react";
import "./App.css";

import { Route, Routes, useLocation } from "react-router-dom";
import { useStateContext } from "./context/StateContext";

import Header from "./components/Header";
import Home from "./pages/Home/Home";
import SelectDifficulty from "./pages/SelectDifficulty/SelectDifficulty";
import Quiz from "./pages/Quiz/Quiz";
import Result from "./pages/Result/Result";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Signup";
import Leaderboards from "./pages/Leaderboards/Leaderboards";
import Profile from "./pages/Profile/Profile";
import Footer from "./components/Footer";

import {
  RequireValue,
  RequireQuizResult,
  RequireProfileData,
} from "./redirect/RequireValues";

import { getRandomQuestions } from "./utilities/Utilities";

function App() {
  const location = useLocation();

  const {
    setProgressBarWidth,
    fetchQuestions,
    setToken,
    setUserId,
    setName,
    token,
    isLogin,
    setIsLogin,
  } = useStateContext();

  useEffect(() => {
    setProgressBarWidth(20);
    getRandomQuestions();
    fetchQuestions();
    checkIfUserExist();
  }, []);

  useEffect(() => {
    checkIfLogin();
  }, [token]);

  const checkIfUserExist = () => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData && storedData.token && storedData.userId) {
      setToken(storedData.token);
      setUserId(storedData.userId);
      setName(storedData.userName);
    }
  };

  const checkIfLogin = () => {
    if (token === null) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  };


  return (
    <div className="App">
      {location.pathname !== "/quiz" ? <Header /> : null}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/selectdifficulty" element={<SelectDifficulty />}></Route>
        {/* <Route path='/quiz' element={<Quiz/>}></Route> */}
        <Route
          path="/quiz"
          element={
            <RequireValue redirectTo="/selectdifficulty">
              <Quiz />
            </RequireValue>
          }
        ></Route>
        {/* <Route path="/result" element={<Result />}></Route> */}
        <Route
          path="/result"
          element={
            <RequireQuizResult redirectTo="/">
              <Result />
            </RequireQuizResult>
          }
        ></Route>

        <Route
          path="/profile/:id"
          element={
            <RequireProfileData redirectTo="/">
              <Profile />
            </RequireProfileData>
          }
        ></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/leaderboards" element={<Leaderboards />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
