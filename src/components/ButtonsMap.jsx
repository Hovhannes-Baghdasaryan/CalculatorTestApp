import React from "react";
import { useSelector } from "react-redux";
import { ButtonBoxStyles } from "./styled-components/ButtonBoxComponent";
import { methodSelector } from "./../Redux/Selectors/methodSelector";
import ButtonComponent from "./ButtonComponent";

const ButtonsMap = ({ Values }) => {
	const method = useSelector(methodSelector);

	return (
		<ButtonBoxStyles>
			{Values.map(item => (
				<ButtonComponent key={item.id} arr={item.arr} method={method} />
			))}
		</ButtonBoxStyles>
	);
};

export default ButtonsMap;
