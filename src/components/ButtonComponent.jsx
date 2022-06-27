import { Button, Row } from "./styled-components/Buttons";
import { clickHandler } from "../utils/clickHandler";
import { useDispatch } from "react-redux";

const ButtonComponent = ({ arr }) => {
	const dispatch = useDispatch();

	return (
		<>
			<Row>
				{arr.map(item => (
					<Button key={item.id} onClick={clickHandler(item, dispatch)} data-testid="button_number" element={item.element}>
						{item.element}
					</Button>
				))}
			</Row>
		</>
	);
};

export default ButtonComponent;
