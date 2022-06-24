import React, { useState } from "react";

import axios from "axios";

import "./Login.css";

import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const initialData = {
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialData);

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

    axios.post('http://localhost:3000/api/login', data, config)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })

  };

  return (
    <section className="form-container">
      <div className="form">
        <h1>Login</h1>
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

          <div className="button-group">
            <Button type="submit">Submit</Button>
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
