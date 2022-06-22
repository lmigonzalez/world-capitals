

// export const fetchQuestions = () =>{
// let result
// 	axios.get('http://localhost:3000/api/questions')
// 	.then(res=>{
// 		// console.log(res.data)
// 		result = res.data
// 	}).catch(err=>{
// 		console.log(err)
// 	})

// 	return result
// }

export const getRandomQuestions = () =>{
	const randomQuestions = []

	while(randomQuestions.length < 5){
		let question = Math.floor(Math.random() * 192)
		if(randomQuestions.indexOf(question) === -1) randomQuestions.push(question)
	}

	return randomQuestions
}

export const getRandomOptions = () =>{
	const randomOptions = []

	while(randomOptions.length < 4){
		let option = Math.floor(Math.random() * 4)
		if(randomOptions.indexOf(option) === -1) randomOptions.push(option)
	}

	return randomOptions
}

export const questionToPlay = (randomNumArray, questionsArray) =>{
	
	const newQuestionsArray = []
	
	for(let i = 0; i < randomNumArray.length; i++){
		newQuestionsArray.push(questionsArray[randomNumArray[i]])
	}
	// console.log(newQuestionsArray)
	// console.log(questionsArray)
	console.log(randomNumArray)

	return newQuestionsArray

}