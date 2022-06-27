import styled, { css } from "styled-components";

export const Button = styled.button`
	border: none;
	background-color: #426ec7;
	font-size: 25px;
	color: rgb(255, 255, 255);
	font-weight: bold;
	cursor: pointer;
	border-radius: 10px;
	outline: none;
	padding: 20px;
	width: 110px;
	height: 70px;
	&:hover {
		background-color: rgb(61, 43, 184);
	}
	${props =>
		props.element === "=" &&
		css`
			border: none;
			background-color: rgb(80, 60, 209);
			font-size: 24px;
			color: rgb(255, 255, 255);
			font-weight: bold;
			cursor: pointer;
			border-radius: 10px;
			outline: none;
			background-color: rgb(243, 61, 29);
			width: 100%;
			&:hover {
				background-color: rgb(228, 39, 15);
			}
		`}
	${props =>
		isNaN(+props.element) &&
		props.element !== "." &&
		props.element !== "=" &&
		css`
			background-color: #808080;
		`}
`;

export const Row = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 15px;
`;
