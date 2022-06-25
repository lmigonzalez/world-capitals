import React, {useState, useEffect} from "react";
import axios from "axios";
import "./Leaderboards.css";

function Leaderboards() {

  useEffect(() =>{
    sortObjectValue()
    getUsers()

  }, [])



  const [usersArray, setUsersArray] = useState([])
  const [sortUserArray, setSortUserArray] = useState([])


  const sortObjectValue = () =>{
    usersArray.sort((a, b) => (b.points - a.points))
    setSortUserArray(usersArray)
   
  }


  const getUsers = () =>{
    axios.get('http://localhost:3000/api/users')
    .then(res=>{
      setUsersArray(res.data)
      // console.log(usersArray)
    })
    .catch(err=>{
      console.log(err)
      
    })
  }


  return (
    <section className="leaderboards-container">

      <h1>Leaderboards</h1>
      <table className="leaderboards-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>

        <tbody>
        {sortUserArray.map((data) => {
              return (
                <tr key={data._id}>
                  <td> {sortUserArray.indexOf(data) + 1} </td>
                  <td> {data.name} </td>
                  <td> {data.points} </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
}

export default Leaderboards;
