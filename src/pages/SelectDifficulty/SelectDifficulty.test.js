import React from "react";
import { StateContext } from "../../context/StateContext";
import {BrowserRouter} from 'react-router-dom'
import SelectDifficulty from "./SelectDifficulty";



import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

const MockSelectDifficulty = () => {
	return (
	  <BrowserRouter>
		<React.StrictMode>
		  <StateContext>
			<SelectDifficulty/>
		  </StateContext>
		</React.StrictMode>
	  </BrowserRouter>
	);
  };


describe("SelectDifficulty Components", () =>{

	it("header to render with correct text", ()=>{
		render(<MockSelectDifficulty/>)
		const header = screen.getByText("Select the difficulty level")
		expect(header).toBeInTheDocument()
	})  
	
	it("all 4 buttons are render", ()=>{
		render(<MockSelectDifficulty/>)
		const buttons = screen.getAllByRole("button")
		expect(buttons).toHaveLength(4)
	}) 

	it("start button is initial disabled", ()=>{
		render(<MockSelectDifficulty/>)
		const startBtn = screen.getByText("Start")
		expect(startBtn).toBeInTheDocument()
		expect(startBtn).toBeDisabled()
	}) 

	it("start button enables when level mode is selected", ()=>{
		render(<MockSelectDifficulty/>)
		const normalLevelBtn = screen.getByText("Normal")
		const startBtn = screen.getByText("Start")

		fireEvent.click(normalLevelBtn)
		expect(startBtn).toBeEnabled()

	})


	
})