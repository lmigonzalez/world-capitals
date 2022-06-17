

export const getRandomQuestions = () =>{
	const randomQuestions = []

	while(randomQuestions.length < 5){
		let question = Math.floor(Math.random() * 10)
		if(randomQuestions.indexOf(question) === -1) randomQuestions.push(question)
	}

	return randomQuestions
}

export const questionToPlay = (randomNumArray, questionsArray) =>{
	// console.log(randomNumArray)
	const newQuestionsArray = []

	for(let i = 0; i < randomNumArray.length; i++){
		newQuestionsArray.push(questionsArray[randomNumArray[i]])
	}

	return newQuestionsArray

}