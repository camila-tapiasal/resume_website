import React from "react";
import {useState} from 'react';


function Information() {

	const submitForm = (e) => {
		e.preventDefault()
	}
	const [addNewForm, setAddNewForm] = useState({
		firstName: '',
		middleInt: '',
		lastName: '',
		phone: '',
		email: '',
		yearsExp: '',
		currentPos: '',
		selectedFile: '',

	});

	const handleFormChange = (event) => {
		event.preventDefault();

		const fieldName = event.target.getAttribute('name');
		const fieldValue = event.target.value;

		const newFormData = { ...addNewForm};
		newFormData[fieldName] = fieldValue;

		setAddNewForm(newFormData);
	};

	return( 
		<div>
			<h1>Please complete the application below:</h1>
			<h1>New Applicant Form</h1>
			<form >
				<div>
				<label>
					First name:
					<input 
						type="text"
						name="firstName"
						value={addNewForm.firstName}
						required="required"
						onChange={handleFormChange} 
						
						/>
					<br />
					<br />
				</label>
				</div>
					
				<div>
				<label>
					Middle Initial:
					<input 
						type="text"
						name="middleInt"
						value={addNewForm.middleInt}
						required="required"
						onChange={handleFormChange} 
						/>
					<br />
				</label>
			
				</div>
				<label>
					Last name:
					<input 
						type="text"
						name="lastName"
						value={addNewForm.lastName}
						required="required"
						onChange={handleFormChange} 
						/>
					<br />
					<br />
				</label>
				<label>
					Phone number:
					<input
						type="text"
						name="phone"
						value={addNewForm.phone}
						required="required"
						onChange={handleFormChange}
						/>
					
				</label>
					<br />
					<br />
				<label>
					Email:
					<input 
						type="email"
						name="email"
						value={addNewForm.email}
						required="required"
						onChange={handleFormChange} 
						/>
					
				</label>
					<br />
					<br />
				<label>
					Years of experience:
					<input 
						type="number"
						name="yearsExp"
						value={addNewForm.yearsExp}
						onChange={handleFormChange} 
						/>
					
				</label>
					<br />
					<br />
				<label>
					Current position:
					<input 
						type="text"
						name="currentPos"
						value={addNewForm.currentPos}
						onChange={handleFormChange} 
						/>
					
				</label>
					<br />
					<br />
				<label>
					Resume File:
					<input 
						type="file"
						name="selectedFile"
						value={addNewForm.selectedFile}
						required="required"
						///onChange={e => setSelectedFile(e.target.files[0])} 
						/>
					
				</label>
					<br />
					<br />
			<button type="submit">Add new application</button>
			</form>
		</div>
		
		



	
	);
}

export default Information;
