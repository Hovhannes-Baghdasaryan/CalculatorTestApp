import React from "react";
import { useSelector } from "react-redux";
import { ButtonBoxStyles } from "./styled-components/ButtonBoxComponent";
import { methodSelector } from "./../Redux/Selectors/methodSelector";
import { valueSelector } from "./../Redux/Selectors/valuesSelector";
import ButtonComponent from "./ButtonComponent";

const ButtonsMap = () => {
	const method = useSelector(methodSelector);
	const Values = useSelector(valueSelector);

	return (
		<ButtonBoxStyles>
			{Values.map(item => (
				<ButtonComponent key={item.id} arr={item.arr} method={method} />
			))}
		</ButtonBoxStyles>
	);
};

export default ButtonsMap;
