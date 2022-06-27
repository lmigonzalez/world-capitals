import React, {useState, useEffect} from "react";
import axios from "axios";

import "./Profile.css";
import { useStateContext } from "../../context/StateContext";

function Profile() {
	const {
	userId,
	userName,
	setUserName,
	userPoints,
	setUserPoints,
	gamesPlayed,
	setGamesPlayed,
	correctAnswers,
	setCorrectAnswers,
	backendUrl,
	  } = useStateContext();
 

	useEffect(()=>{
		getUserData()
	}, [])




const getUserData = () =>{


	axios.get(`${backendUrl}/profile/${userId}`)
	.then((res)=>{

		setUserName(res.data.name)
		setUserPoints(res.data.points)
		setGamesPlayed(res.data.gamesPlayed)
		setCorrectAnswers(res.data.correctAnswers)
	})
	.catch((err)=>{
		console.log(err)
	})

	
}


  return (
    <section className="profile-container">
      <div className="profile-content">
        <h2>{userName}</h2>
        <table className="profile-table">
			<tbody>
          <tr>
            <th>Points:</th>
            <td>{userPoints}</td>
          </tr>
          <tr>
            <th>Games Played:</th>
            <td>{gamesPlayed}</td>
          </tr>
          <tr>
            <th>Correct answers:</th>
            <td>{correctAnswers}</td>
          </tr>
		  </tbody>
        </table>
      </div>
    </section>
  );
}

export default Profile;
