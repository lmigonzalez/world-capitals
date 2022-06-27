import React, { useState } from "react";

import axios from "axios";

import "./Signup.css";

import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { useStateContext } from "../../context/StateContext";

function Signup() {
  const navigate = useNavigate();

  const {
  setUserCreatedMsg,
  backendUrl,  
  } = useStateContext();

  const initialData = {
	  name: '',
    email: '',
    password: '',
  };

  const [userData, setUserData] = useState(initialData);

  const [emailDisabled, setEmailDisabled] = useState(true)
  const [passwordDisabled, setPasswordDisabled] = useState(true)
  const [submitDisabled, setSubmitDisabled] = useState(true)
  const [createUSerMsg, setCreateUserMsg] = useState(false)

	const initialErrorMsg = {
		name: '',
		email: '',
		password: '',
		

	}

	const [error, setError] = useState(initialErrorMsg)

  const closeRegisteredSuccessfullyMsg = () =>{
    setTimeout(() => {
      setUserCreatedMsg(false)
    }, 5000)
  }

  const closeCreateUserErrorMsg = () =>{
    setTimeout(() => {
      setCreateUserMsg(false)
    }, 5000)
  }


  const inputErrorHandler = (e) => {

	
	
		if(e.target.name === 'name'){
			if(!e.target.value.trim().length){
				setError({...error, name: '', })
        setEmailDisabled(true)
        setSubmitDisabled(true)
			
			}else if(e.target.value.trim().length < 3){
				setError({...error, name: 'name is too short'})
        setEmailDisabled(true)
        setSubmitDisabled(true)
			

			}else if(e.target.value.trim().length >= 20){
				setError({...error, name: 'name is too long'})
        setEmailDisabled(true)
        setSubmitDisabled(true)
			
			}else{
				setError({...error, name: ''})
        setEmailDisabled(false)
		
			}

		}

		if(e.target.name === 'email'){
			if(e.target.value.trim().length > 1 && (!e.target.value.includes('@') || !e.target.value.includes('.'))){
				setError({...error, email: 'enter a valid email'})
        setPasswordDisabled(true)
        setSubmitDisabled(true)
				
			}else{
				setError({...error, email: ''})
        setPasswordDisabled(false)
			}

		}

		if(e.target.name === 'password'){
			if(e.target.value.trim().length < 4 && e.target.value.trim().length > 0){
				setError({...error, password: 'password is too weak'})
        setSubmitDisabled(true)
				
			}else{
				setError({...error, password: ''})
        setSubmitDisabled(false)
			
		
			}

		}

	}

  const handleChange = (e) => {
	setUserData({
		...userData, [e.target.name]: e.target.value
	})
  inputErrorHandler(e)
  };

  const handleCancel = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const data = JSON.stringify(userData)

    axios.post(`${backendUrl}/newuser`, data, config)
    .then(res=>{
      navigate('/login')
      setUserCreatedMsg(true)
      closeRegisteredSuccessfullyMsg()
      
    })
    .catch(err=>{
      setCreateUserMsg(true)
      closeCreateUserErrorMsg()
    })

  };

  return (
    <section className="signup-container">
      <section className="form-container">
        <div className="form">
          <h1>SignUp</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="input-section" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                name="name"
                value={userData.name}
                onChange={handleChange}
              />
              <p className="form-error">{error.name}</p>
            </Form.Group>
              <p></p>
            <Form.Group className="input-section" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                disabled = {emailDisabled}
                value={userData.email}
                onChange={handleChange}
              />
              <p className="form-error">{error.email}</p>
            </Form.Group>

            <Form.Group className="input-section" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                disabled = {passwordDisabled}
                value={userData.password}
                onChange={handleChange}
              />
              <p className="form-error">{error.password}</p>
            </Form.Group>

            
            <div className={createUSerMsg? "signup-error-msg": "signup-error-msg inactive"}>

              <p>Something happened, please try again!</p>
            </div>
            <div className="button-group">
              <Button type="submit" disabled={submitDisabled} >Submit</Button>
              <Button onClick={handleCancel}>Cancel</Button>
            </div>
          </Form>
          <div className="register">
            <p>Already have an account?</p>
            <Link to="/login">&nbsp;Login</Link>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Signup;
