import React, { useState } from "react";

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
		...userData, [e.target.name]: e.target.value
	})
  };

  const handleCancel = () => {
	  navigate('/')
  };

  const handleSubmit = (e) => {
	  e.preventDefault()
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
          <Button onClick={handleCancel} >Cancel</Button>
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
