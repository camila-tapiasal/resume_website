import React, {useState} from "react";
import {  BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Information from "./Pages/Information";
import Chart from "./Pages/Chart";
import sierraLogo from './images/sierraLogo.png'
import { Navbar } from "./components/navbar";



function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path='/Information' element={<Information />} />
				<Route path='/Chart' element={<Chart />} />

			</Routes>
		</Router>
		
	)
	

}
export default App; 

