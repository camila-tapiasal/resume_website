import React from "react";
import "../components/chart.css";
import Information from "./Information";


function Chart() {
	return (
		<>
			<h1>Applications received</h1>
				<form>
						<table>
							<thead>
								<tr>
									<th>First Name</th>
									<th>Middle Initial</th>
									<th>Last Name</th>
									<th>Phone Number</th>
									<th>Email</th>
									<th>Years of Experience</th>
									<th>Current Position</th>
									<th>Resume File</th>
								</tr>
							</thead>
							
							
						
						</table>
					</form>
			</>
		
	)
}

export default Chart;


/* 

<tbody> 
								{addNewForm.map((addNewForm) => (
									<tr>
										<td>{addNewForm.firstName}</td>
										<td>{addNewForm.middleInt}</td>
										<td>{addNewForm.lastName}</td>
										<td>{addNewForm.phone}</td>
										<td>{addNewForm.email}</td>
										<td>{addNewForm.yearsExp}</td>
										<td>{addNewForm.currentPos}</td>
										<td>{addNewForm.selectedFile}</td>
									</tr>
								))} 
								
							</tbody>


*/