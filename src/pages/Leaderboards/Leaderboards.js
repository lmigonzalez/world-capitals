import React, {useState, useEffect} from "react";
import axios from "axios";
import "./Leaderboards.css";

function Leaderboards() {

  useEffect(() =>{
    // sortObjectValue()
    getUsers()

  }, [])

  const obj = [
    {
      id: 1,
      name: 'Luis',
      points: 80
    },
    {
      id: 2,
      name: 'Sumail',
      points: 85
    },
    {
      id: 3,
      name: 'Miracle',
      points: 60
    },
    {
      id: 4,
      name: 'Kuroky',
      points: 100
    },
    {
      id: 5,
      name: 'GH',
      points: 20
    }
  ]

  const [usersArray, setUsersArray] = useState([])
  const [newObj, setNewObj] = useState([])


  const sortObjectValue = () =>{
    obj.sort((a, b) => (b.points - a.points))
    setNewObj(obj)
   
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
        {usersArray.map((data) => {
              return (
                <tr key={data._id}>
                  <td> {usersArray.indexOf(data) + 1} </td>
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
