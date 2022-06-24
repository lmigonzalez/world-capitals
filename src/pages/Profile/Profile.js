import React, {useState, useEffect} from "react";
import axios from "axios";

import "./Profile.css";
import { useStateContext } from "../../context/StateContext";

function Profile() {
	const {
	userId
	  } = useStateContext();

	const [name, setName] = useState(null)  
	const [points, setPoints] = useState(null)  
	const [gamesPlayed, setGamesPlayed] = useState(null)  
	const [correctAnswers, setCorrectAnswers] = useState(null)  

	useEffect(()=>{
		getUserData()
	}, [])



const getUserData = () =>{

	axios.get(`http://localhost:3000/api/userid/${userId}`)
	.then((res)=>{
		console.log(res)
		setName(res.data.name)
		setPoints(res.data.points)
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
        <h2>{name}</h2>
        <table className="profile-table">
			<tbody>
          <tr>
            <th>Points:</th>
            <td>{points}</td>
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
