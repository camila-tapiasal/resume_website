import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/home.css";
import StackGrid from "../components/stackGrid";


function Home() {
	const navigate = useNavigate()

	return (
		<h1>
			<StackGrid>
			Sierra Soft Corp
			<br />
			Welcome!
			<br />

			<button onClick={() => {
			navigate("/Information")
			}}>Go to application
			</button>

			<br />

			<button onClick={() => {
			navigate("/Chart")
			}}>Go to submitted information
			</button>

			</StackGrid>
		
		</h1>
	)
}

export default Home;

/* */
