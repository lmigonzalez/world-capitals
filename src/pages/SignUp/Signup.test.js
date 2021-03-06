import React from "react";
import { StateContext } from "../../context/StateContext";
import {BrowserRouter} from 'react-router-dom'
import Signup from "./Signup";



import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"


const MockSignup = () => {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <StateContext>
          <Signup />
        </StateContext>
      </React.StrictMode>
    </BrowserRouter>
  );
};

describe("Login Components", () =>{

	it("h1 render correctly", ()=>{
		render(<MockSignup/>)
		const h1 = screen.getByText("SignUp")
		expect(h1).toBeInTheDocument()
	})  

	it("name input field are render correctly", ()=>{
		render(<MockSignup/>)
		const nameInputField = screen.getByLabelText('Name')

		expect(nameInputField).toBeInTheDocument()
	})  
	it("email input field are render correctly", ()=>{
		render(<MockSignup/>)
		const emailInputField = screen.getByLabelText('Email address')

		expect(emailInputField).toBeInTheDocument()
	})
	it("password input field are render correctly", ()=>{
		render(<MockSignup/>)
		const passwordInputField = screen.getByLabelText('Password')

		expect(passwordInputField).toBeInTheDocument()
	}) 

	it("all buttons are render correctly", ()=>{
		render(<MockSignup/>)
		const buttons = screen.getAllByRole('button')
		expect(buttons).toHaveLength(2)
	}) 

	it("submit button is initial disabled", ()=>{
		render(<MockSignup/>)
		const submitBtn = screen.getByText("Submit")
		expect(submitBtn).toBeInTheDocument()
		expect(submitBtn).toBeDisabled()
	}) 

	it('submit enable when input has the correspondent value', ()=>{

		render(<MockSignup/>)
		const nameInputField = screen.getByLabelText('Name')
		
		const emailInputField = screen.getByLabelText('Email address')

		const passwordInputField = screen.getByLabelText('Password')

		const submitBtn = screen.getByText("Submit")

		fireEvent.change(nameInputField, { 'target': { 'value': 'username' } })

		fireEvent.change(emailInputField, { 'target': { 'value': 'user@email.com' } })

		fireEvent.change(passwordInputField, { 'target': { 'value': 'password' } })

		expect(nameInputField).toHaveValue('username')
		expect(emailInputField).toHaveValue('user@email.com')
		expect(passwordInputField).toHaveValue('password')
		expect(submitBtn).toBeEnabled()


	})

	
	
})