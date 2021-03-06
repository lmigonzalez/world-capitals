import React, {useState, useEffect} from "react";
import axios from "axios";
import "./Leaderboards.css";

import Spinner from "../../components/Spinner";
import { useStateContext } from "../../context/StateContext";

function Leaderboards() {

  const {
   backendUrl,

  } = useStateContext();

  useEffect(() =>{
    getUsers()
  }, [])

  

  const [usersArray, setUsersArray] = useState([])
 

  const getUsers = () =>{

 
      axios.get(`${backendUrl}/users`)
      .then(res=>{
        setUsersArray(res.data)
     
        
      })
      .catch(err=>{
        console.log(err)
        
      })

  
  }

  

  return (
    <section className="leaderboards-container">
      <h1>Leaderboards</h1>
      {usersArray.length <= 0? <Spinner/> : <table className="leaderboards-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>

        <tbody>
        {usersArray.sort((a, b) => (b.points - a.points)).map((data) => {
              return (
                <tr key={data._id}>
                  <td> {usersArray.indexOf(data) + 1} </td>
                  <td> {data.name} </td>
                  <td> {data.points} </td>
                </tr>
              );
            })}
        </tbody>
      </table>}
      
    </section>
  );
}

export default Leaderboards;
