import { Button, LastRow, Row } from "./styled-components/Buttons";
import { clickHandler } from "../utils/clickHandler";
import { useDispatch } from "react-redux";

const ButtonComponent = ({ arr }) => {
	const dispatch = useDispatch();

	return (
		<>
			{arr.length === 4 ? (
				<Row>
					{arr.map(item => (
						<Button
							key={item.id}
							onClick={clickHandler(item, dispatch)}
							data-testid="button_number"
						>
							{item.element}
						</Button>
					))}
				</Row>
			) : (
				<LastRow>
					{arr.map(item => (
						<Button
							key={item.id}
							element={item.element}
							onClick={clickHandler(item, dispatch)}
							data-testid="button_number"
						>
							{item.element}
						</Button>
					))}
				</LastRow>
			)}
		</>
	);
};

export default ButtonComponent;
