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
	let questions
	// console.log(randomQuestion)

  const fetchQuestions = () => {
    axios
      .get("http://localhost:3000/api/questions")
      .then((res) => {
		 questions = res.data	
			
	})
	.then(()=>{
		setSelectedQuestions(questionToPlay(getRandomQuestions(), questions))
	})
	.catch((err) => {
		console.log(err);
	});
};

 

  const [progressBarWidth, setProgressBarWidth] = useState(20);
  const [resultArray, setResultArray] = useState([]);
  const [levelSelected, setLevelSelected] = useState(null);
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)
  const [name, setName] = useState(null)
  const [login, setLogin] = useState(false)

  const percent = () => {
    setProgressBarWidth(progressBarWidth + 20);
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
		login,
		setToken,
		setUserId,
		setName,
		setLogin,
        setProgressBarWidth,
        percent,
        setResultArray,
        setTimerNum,
        setSelectedQuestions,
		setLevelSelected,
		fetchQuestions,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);

//   const originalArray = [
//     {
//       countryName: "Australia",
//       option1: "Canberra",
//       option2: "Seoul",
//       option3: "Palikir",
//       option4: "Nassau",
//       correctAnswer: "Canberra",
//     },
// 	{
// 		countryName: "China",
// 		option1: "Beijing",
// 		option2: "Dublin",
// 		option3: "Rabat",
// 		option4: "Santiago",
// 		correctAnswer: "Beijing",
// 	  },
// 	  {
// 		countryName: "Cuba",
// 		option1: "Havana",
// 		option2: "Gitega",
// 		option3: "Saint George's",
// 		option4: "Tunis",
// 		correctAnswer: "Havana",
// 	  },
// 	  {
// 		countryName: "Ecuador",
// 		option1: "Quito",
// 		option2: "Singapore",
// 		option3: "Monrovia",
// 		option4: "Stockholm",
// 		correctAnswer: "Quito",
// 	  },
// 	  {
// 		countryName: "England",
// 		option1: "London",
// 		option2: "Vienna",
// 		option3: "Nouakchott",
// 		option4: "Damascus",
// 		correctAnswer: "London",
// 	  },
// 	  {
// 		countryName: "Finland",
// 		option1: "Helsinki",
// 		option2: "Rome",
// 		option3: "Paramaribo",
// 		option4: "Kampala",
// 		correctAnswer: "Helsinki",
// 	  },
// 	  {
// 		countryName: "France",
// 		option1: "Paris",
// 		option2: "Funafuti",
// 		option3: "Nairobi",
// 		option4: "Beijing",
// 		correctAnswer: "Paris",
// 	  },
// 	  {
// 		countryName: "Greece",
// 		option1: "Athens",
// 		option2: "Manila",
// 		option3: "Tashkent",
// 		option4: "Singapore",
// 		correctAnswer: "Athens",
// 	  },
// 	  {
// 		countryName: "Germany",
// 		option1: "Berlin",
// 		option2: "Suva",
// 		option3: "Tegucigalpa",
// 		option4: "Luanda",
// 		correctAnswer: "Berlin",
// 	  },
// 	  {
// 		countryName: "Indonesia",
// 		option1: "Jakarta",
// 		option2: "Amsterdam",
// 		option3: "Baghdad",
// 		option4: "Manama",
// 		correctAnswer: "Jakarta",
// 	  },
// ];
