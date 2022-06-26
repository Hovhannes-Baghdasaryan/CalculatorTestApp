import { actions } from "../Redux/Reducers/CalculateReducer";

export const clickHandler = (item, dispatch) => () => {
	if (item.element === "+" || item.element === "-" || item.element === "x" || item.element === "/") dispatch(actions.SetMethod(item.element));
	else if (item.element >= 0 && item.element <= 9) dispatch(actions.SetNumbers(item.element));
	else if (item.element === "=") dispatch(actions.EqualNumbers());
	else if (item.element === "C") dispatch(actions.clearNumbers());
	else dispatch(actions.invertNumbers());
};
