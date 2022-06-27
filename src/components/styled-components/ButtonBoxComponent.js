import styled from "styled-components";

export const ButtonBoxStyles = styled.div`
	display: flex;
	flex-flow: column;
	gap: 15px;
`;

export const ScreenStyles = styled.div`
	height: 100px;
	width: 100%;
	margin-bottom: 10px;
	padding: 0 10px;
	background-color: #220189;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: white;
	font-weight: bold;
	font-size: 300%;
	overflow: auto;
	span {
		color: gray;
		font-size: 60%;
		align-self: flex-start;
	}
	&::-webkit-scrollbar {
		display: none;
	}
`;
