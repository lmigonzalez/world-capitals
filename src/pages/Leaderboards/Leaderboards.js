import React, {useState, useEffect} from "react";
import "./Leaderboards.css";

function Leaderboards() {

  useEffect(() =>{
    sortObjectValue()

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

  const [newObj, setNewObj] = useState([])


  const sortObjectValue = () =>{
    obj.sort((a, b) => (b.points - a.points))
    setNewObj(obj)
   
  }
  console.log(newObj)





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
        {newObj.map((data) => {
              return (
                <tr key={data.id}>
                  <td> {newObj.indexOf(data) + 1} </td>
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
