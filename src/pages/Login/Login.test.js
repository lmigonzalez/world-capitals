import React from "react";
import { StateContext } from "../../context/StateContext";
import {BrowserRouter} from 'react-router-dom'
import Login from "./Login";



import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"


const MockLogin = () => {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <StateContext>
          <Login />
        </StateContext>
      </React.StrictMode>
    </BrowserRouter>
  );
};

describe("Login Components", () =>{

	it("h1 render correctly", ()=>{
		render(<MockLogin/>)
		const h1 = screen.getByText("Login")
		expect(h1).toBeInTheDocument()
	})  

	it("email input field are render correctly", ()=>{
		render(<MockLogin/>)
		const emailInputField = screen.getByLabelText('Email address')

		expect(emailInputField).toBeInTheDocument()
	})  
	it("password input field are render correctly", ()=>{
		render(<MockLogin/>)
		const passwordInputField = screen.getByLabelText('Password')

		expect(passwordInputField).toBeInTheDocument()
	}) 

	it("all buttons are render correctly", ()=>{
		render(<MockLogin/>)
		const buttons = screen.getAllByRole('button')
		expect(buttons).toHaveLength(2)
	}) 

	it("submit button is initial disabled", ()=>{
		render(<MockLogin/>)
		const submitBtn = screen.getByText("Submit")
		expect(submitBtn).toBeInTheDocument()
		expect(submitBtn).toBeDisabled()
	}) 

	it('submit enable when input has the correspondent value', ()=>{

		render(<MockLogin/>)
		const emailInputField = screen.getByLabelText('Email address')

		const passwordInputField = screen.getByLabelText('Password')

		const submitBtn = screen.getByText("Submit")

		fireEvent.change(emailInputField, { 'target': { 'value': 'user@email.com' } })
		fireEvent.change(passwordInputField, { 'target': { 'value': 'password' } })

		expect(emailInputField).toHaveValue('user@email.com')
		expect(passwordInputField).toHaveValue('password')
		expect(submitBtn).toBeEnabled()


	})

	
	
})