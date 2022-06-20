import React, { createContext, useContext, useState } from "react";
import { getRandomQuestions, questionToPlay } from "../utilities/Utilities";
const Context = createContext();

export const StateContext = ({ children }) => {
  const originalArray = [
    {
      countryName: "Australia",
      option1: "Canberra",
      option2: "Seoul",
      option3: "Palikir",
      option4: "Nassau",
      correctAnswer: "Canberra",
    },
	{
		countryName: "China",
		option1: "Beijing",
		option2: "Dublin",
		option3: "Rabat",
		option4: "Santiago",
		correctAnswer: "Beijing",
	  },
	  {
		countryName: "Cuba",
		option1: "Havana",
		option2: "Gitega",
		option3: "Saint George's",
		option4: "Tunis",
		correctAnswer: "Havana",
	  },
	  {
		countryName: "Ecuador",
		option1: "Quito",
		option2: "Singapore",
		option3: "Monrovia",
		option4: "Stockholm",
		correctAnswer: "Quito",
	  },
	  {
		countryName: "England",
		option1: "London",
		option2: "Vienna",
		option3: "Nouakchott",
		option4: "Damascus",
		correctAnswer: "London",
	  },
	  {
		countryName: "Finland",
		option1: "Helsinki",
		option2: "Rome",
		option3: "Paramaribo",
		option4: "Kampala",
		correctAnswer: "Helsinki",
	  },
	  {
		countryName: "France",
		option1: "Paris",
		option2: "Funafuti",
		option3: "Nairobi",
		option4: "Beijing",
		correctAnswer: "Paris",
	  },
	  {
		countryName: "Greece",
		option1: "Athens",
		option2: "Manila",
		option3: "Tashkent",
		option4: "Singapore",
		correctAnswer: "Athens",
	  },
	  {
		countryName: "Germany",
		option1: "Berlin",
		option2: "Suva",
		option3: "Tegucigalpa",
		option4: "Luanda",
		correctAnswer: "Berlin",
	  },
	  {
		countryName: "Indonesia",
		option1: "Jakarta",
		option2: "Amsterdam",
		option3: "Baghdad",
		option4: "Manama",
		correctAnswer: "Jakarta",
	  },

  ];

  const questions = originalArray


  const [selectedQuestions, setSelectedQuestions] = useState(questionToPlay(getRandomQuestions(), questions))
  

  const [progressBarWidth, setProgressBarWidth] = useState(20)
  const [resultArray, setResultArray] = useState([])

  const percent = () =>{
	setProgressBarWidth(progressBarWidth + 20)
  }

  const [timerNum, setTimerNum] = useState(20)

//  console.log(resultArray)

  return <Context.Provider value={{
	  selectedQuestions,
	  progressBarWidth,
	  resultArray,
	  timerNum,
	  setProgressBarWidth,
	  percent,
	  setResultArray,
	  setTimerNum,
	  setSelectedQuestions,
  }}>{children}</Context.Provider>;
};

export const useStateContext = () => useContext(Context);
