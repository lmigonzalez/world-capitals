import React from "react";
import "./Result.css";
import { useNavigate } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";
import { Button } from "react-bootstrap";
import ResultAnswer from "../../components/ResultAnswer";

import { useStateContext } from "../../context/StateContext";

function Result() {
	const { resultArray, setResultArray } = useStateContext();
	const navigate = useNavigate()

	const handleExit = () =>{
		navigate('/')
	}
	const handleTryAgain = () =>{
		navigate('/selectdifficulty')
	}

	console.log(resultArray)

  return (
    <section className="result-container">
      <div className="result-content">
        <div className="result-details">
          <p className="correct-result">17 from 20</p>
          <p>Points: 90</p>
        </div>
        <table className="result-table">
          <thead>
            <tr>
              <th>Result</th>
              <th>Country</th>
              <th>Correct Answer</th>
              <th>Your Answer</th>
            </tr>
          </thead>

          <tbody>

            <tr>
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
            </tr>

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
