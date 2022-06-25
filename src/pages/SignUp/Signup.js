import React, { useState } from "react";

import axios from "axios";

import "./Signup.css";

import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const initialData = {
	  name: "",
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialData);

  const handleChange = (e) => {
	setUserData({
		...userData, [e.target.name]: e.target.value
	})
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

    axios.post('http://localhost:3000/api/newuser', data, config)
    .then(res=>{
      console.log(res)
      navigate('/login')
      
    })
    .catch(err=>{
      console.log(data)
      console.log(err)
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
            </Form.Group>

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

            <div className="button-group">
              <Button type="submit">Submit</Button>
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
