import React from 'react';
import {Navigate} from 'react-router-dom'

import {useStateContext} from '../context/StateContext'

export const RequireValue = ({ children, redirectTo }) => {

	const {levelSelected} = useStateContext()

  return (
	levelSelected ? children : <Navigate to={redirectTo}/>
  )
}


export const RequireQuizResult = ({ children, redirectTo }) =>{

	const {resultArray} = useStateContext()

	return (
		resultArray.length > 0 ? children : <Navigate to={redirectTo}/>
	  )
}

export const RequireProfileData = ({ children, redirectTo }) =>{
	const {isLogin} = useStateContext()

	return(
		isLogin? children: <Navigate to={redirectTo}/>
	)
}