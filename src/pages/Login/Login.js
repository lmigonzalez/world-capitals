import React, { useState, useEffect } from "react";

import axios from "axios";

import "./Login.css";

import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { useStateContext } from "../../context/StateContext";

function Login() {
  const navigate = useNavigate();

  const {
    userCreatedMsg,
    setToken,
    setUserId,
    setName,
    setUserPoints,
		setGamesPlayed,
		setCorrectAnswers,
    backendUrl,

  } = useStateContext();
  
  const initialData = {
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialData);
  const [submitDisabled, setSubmitDisabled] = useState(true)
  const [errorMsg, setErrorMsg] = useState(false)
 

  useEffect(()=>{
    checkIfInputFields()
  }, [userData])



  const checkIfInputFields = () =>{
    if(userData.email.length < 3 || userData.password.length < 3){
  
      setSubmitDisabled(true)
    }else{
      setSubmitDisabled(false)
      
    }
  }


  const closeErrorMsg = () =>{
    setTimeout(() => {
      setErrorMsg(false)
    }, 5000)
  }

    
    const handleChange = (e) => {
      setUserData({
        ...userData,
        [e.target.name]: e.target.value,
      });
      
   

   
    };
    
    const handleCancel = () => {
      navigate("/");
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      
      const data = JSON.stringify(userData);
      
      axios.post(`${backendUrl}/login`, data, config)
      .then((res)=>{
        setToken(res.data.token)
        setUserId(res.data.user._id)
        setName(res.data.user.name)
        setUserPoints(res.data.user.points)
        setGamesPlayed(res.data.user.gamesPlayed)
        setCorrectAnswers(res.data.user.correctAnswers)
        localStorage.setItem('userData', JSON.stringify({userId: res.data.user._id, token: res.data.token}))
        
        navigate('/')
      })
      .catch((err)=>{
        setErrorMsg(true)
        closeErrorMsg()
      })
      
    };

    
    return (
    <section className="form-container">
      <div className="form">
        <h1>Login</h1>
        <div className={userCreatedMsg? "successfully-registered" : "successfully-registered inactive"}> <p>You have registered successfully, please login.</p> </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="input-section" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="input-section" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
          </Form.Group>
          <div className={errorMsg? "error-msg": "error-msg inactive"}>
            <p>Incorrect  Email and/or Password </p>
          </div>
          <div className="button-group">
            <Button type="submit" disabled={submitDisabled} >Submit</Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </div>
        </Form>
        <div className="register">
          <p>Not a member?</p>
          <Link to="/signup">&nbsp;Create Account</Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
