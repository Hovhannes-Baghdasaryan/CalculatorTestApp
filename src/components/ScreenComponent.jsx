import React from "react";
import { useSelector } from "react-redux";
import { ScreenStyles } from "./styled-components/ButtonBoxComponent";
import { numberSelector, reserveSelector } from "./../Redux/Selectors/numbersSelector";
import { methodSelector } from "../Redux/Selectors/methodSelector";

const ScreenComponent = () => {
	const number = useSelector(numberSelector);
	const reserve = useSelector(reserveSelector);
	const method = useSelector(methodSelector);

	return (
		<>
			<ScreenStyles>
				<span>{method}</span>
				<p data-testid="screen_number">
					{number ? number : reserve === false ? <span>Can't be called</span> : reserve}
				</p>
			</ScreenStyles>
		</>
	);
};

export default ScreenComponent;
