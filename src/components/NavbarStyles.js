import { NavLink as Link } from "react-router-dom";
import styled from 'styled-components';

export const Nav = styled.nav `
	background: #401d53;
	width: 100%;
	
	height: 150px;
	display: flex;
	margin: 0;
	justify-content: space-between;
	padding: 0.00005 rem calc((100vx -1000px) /2);
	z-index: 12;
	box-sizing: border-box;
	`

export const NavLink = styled(Link)`
	
	color: #FBF7F7;
	font-size: large;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 150px;
	cursor: pointer;
	&.active {
		color: #00000
	}
	
`
export const NavMenu = styled.div `
	display: flex;
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	align-items: center;
	margin-right: -24px
	@media screen and (max-wifth: 768px) {
		display: none
	}
	`

