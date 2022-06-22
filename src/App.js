import React, { useEffect } from "react";
import "./App.css";

import { Route, Routes, useLocation } from "react-router-dom";
import { useStateContext } from "./context/StateContext";

import Header from "./components/Header";
import Home from "./pages/Home/Home";
import SelectDifficulty from "./pages/SelectDifficulty/SelectDifficulty";
import Quiz from "./pages/Quiz/Quiz";
import Result from "./pages/Result/Result";

import {RequireValue, RequireQuizResult} from "./redirect/RequireValues";

import { getRandomQuestions } from "./utilities/Utilities";

function App() {
  const location = useLocation();

  const { setProgressBarWidth, fetchQuestions } = useStateContext();

  useEffect(() => {
    setProgressBarWidth(20);
    getRandomQuestions();
    fetchQuestions();
  }, []);

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
       <Route path="/result" element={
          <RequireQuizResult redirectTo="/">
              <Result />
          </RequireQuizResult>
        }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
