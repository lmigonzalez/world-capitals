import React, {useState, useEffect} from "react";
import "./Result.css";
import { useNavigate } from "react-router-dom";
import { BsCheckLg, BsXCircleFill } from "react-icons/bs";
import { Button } from "react-bootstrap";


import { useStateContext } from "../../context/StateContext";

function Result() {
  const { resultArray, setResultArray } = useStateContext();
  const navigate = useNavigate();

  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [resultPoints, setResultPoints] = useState(0)
  let num = 0

// let correctAnswers = 0
// let resultPoints = 0

  useEffect(() =>{
	  getPoints()
  }, [])

  const handleExit = () => {
    navigate("/");
  };
  const handleTryAgain = () => {
    navigate("/selectdifficulty");
  };

  console.log(resultArray);

  const getPoints = () =>{
	  for(let data of resultArray){
		  if(data.yourAnswer === data.correctAnswer){
			
			num ++
			  
		  }
	  }

	  setCorrectAnswers(num)
	  setResultPoints(num *  5)
  }

  return (
    <section className="result-container">
      <div className="result-content">
        <div className="result-details">
          <p className="correct-result">{`${correctAnswers} from ${resultArray.length}`}</p>
          <p>{`Points: ${resultPoints}`}</p>
        </div>
        <table className="result-table">
          <thead>
            <tr>
              <th>Result</th>
              <th>Country</th>
              <th>Your Answer</th>
              <th>Correct Answer</th>
            </tr>
          </thead>

          <tbody>
            {resultArray.map((data) => {
              return (
                <tr>
                  <td>
					  {data.yourAnswer === data.correctAnswer ? <BsCheckLg className="correct-icon"/> : <BsXCircleFill className="incorrect-icon"/>}
                    
                  </td>
                  <td> {data.country} </td>
                  <td> {data.yourAnswer} </td>
                  <td> {data.correctAnswer} </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="result-buttons">
          <Button onClick={handleExit}>Exit</Button>
          <Button onClick={handleTryAgain}>Try Again</Button>
        </div>
      </div>
    </section>
  );
}

export default Result;

{
  /* <tr>
<td>
  <BsCheckLg />
</td>
<td> Cuba </td>
<td> Havana </td>
<td> Tokio </td>
</tr>

<tr>
<td>
  <BsCheckLg />
</td>
<td> France </td>
<td> Paris </td>
<td> Rome </td>
</tr>

<tr>
<td>
  <BsCheckLg />
</td>
<td> France </td>
<td> Paris </td>
<td> Rome </td>
</tr>

<tr>
<td>
  <BsCheckLg />
</td>
<td> France </td>
<td> Paris </td>
<td> Rome </td>
</tr> */
}
