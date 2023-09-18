import React from "react";
import {Nav, NavLink, NavMenu} from "./NavbarStyles";
import sierraLogo from '../images/sierraLogo.png';
import "./hover.css"

 
export const Navbar = () => {
	
	return (
		<Nav>
			<NavMenu>
				<NavLink to="/" activeStyle >
					<img style={{width:200, height:100}} src={sierraLogo} alt="logo"/>


				</NavLink>
				<NavLink to="/Information" activeStyle style={{position: "absolute", right: 150}} >
					Application
				</NavLink>
				<NavLink to="/Chart" activeStyle style={{position: "absolute", right: 0  }} >
					Submissions
				</NavLink>
			</NavMenu>
		</Nav>

	)
}