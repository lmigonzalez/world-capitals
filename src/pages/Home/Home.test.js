import React from "react";
import { StateContext } from "../../context/StateContext";
import {BrowserRouter} from 'react-router-dom'
import Home from "./Home";

import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"


// test("buttons renders correctly if not login", () =>{
// 	render(<Home/>)
// 	const buttons = screen.getAllByRole("button")
// 	expect(buttons).toHaveLength(2)

// })

test("buttons renders correctly if not login", () =>{
	render( <BrowserRouter>
		<React.StrictMode>
		  <StateContext>
			<Home />
		  </StateContext>
		</React.StrictMode>
	  </BrowserRouter>)

	const buttons = screen.getAllByRole('button')
	expect(buttons).toHaveLength(2)
		

})