import React from "react";
import { StateContext } from "../../context/StateContext";
import {BrowserRouter} from 'react-router-dom'
import Leaderboards from "./Leaderboards";



import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"


const MockLeaderboards = () => {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <StateContext>
          <Leaderboards />
        </StateContext>
      </React.StrictMode>
    </BrowserRouter>
  );
};

describe("Leaderboards Components", () =>{

	it("header to render with correct text", ()=>{
		render(<MockLeaderboards/>)
		const header = screen.getByText("Leaderboards")
		expect(header).toBeInTheDocument()
	})  

	it("table render correctly", async ()=>{
		render(<MockLeaderboards/>)
		const table = await screen.findByRole("table")
		expect(table).toBeInTheDocument()
	})
	

	
})