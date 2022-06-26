const SET_METHOD = "METHOD";
const SET_NUMBERS = "SET_NUMBERS";
const EQUAL_NUMBERS = "EQUAL_NUMBERS";
const CLEAR_NUMBERS = "CLEAR_NUMBERS";
const INVERT_NUMBERS = "INVERT_NUMBERS";

const initialState = {
	method: null,
	number: 0,
	reserve: 0,
};

const CalculateReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_METHOD:
			let reserve;
			if (!state.reserve && state.number) reserve = state.number;
			else reserve = +state.reserve;

			return { ...state, method: action.method, number: 0, reserve: reserve };

		case SET_NUMBERS:
			let number;
			if (state.number === 0 && action.value === "0") number = 0;
			else if (state.number === 0) number = +action.value;
			else number = +(`${state.number}` + action.value);

			return { ...state, number: number, reserve: !state.method ? 0 : state.reserve };

		case EQUAL_NUMBERS:
			let result;
			if (state.method) {
				switch (state.method) {
					case "+":
						result = state.reserve + state.number;
						break;
					case "-":
						result = state.reserve - state.number;
						break;
					case "/":
						result = state.reserve / state.number;
						break;
					case "x":
						result = state.reserve * state.number;
						break;
					default:
						break;
				}
			}

			if (!isFinite(result)) result = false;

			return { ...state, number: 0, reserve: result, method: null };

		case CLEAR_NUMBERS:
			return { ...state, method: null, number: 0, reserve: 0 };

		case INVERT_NUMBERS:
			return {
				...state,
				number: state.number * -1,
				reserve: !state.number ? state.reserve * -1 : state.reserve,
			};

		default:
			return state;
	}
};

export const actions = {
	SetMethod: method => ({ type: SET_METHOD, method }),
	SetNumbers: value => ({ type: SET_NUMBERS, value }),
	EqualNumbers: () => ({ type: EQUAL_NUMBERS }),
	clearNumbers: () => ({ type: CLEAR_NUMBERS }),
	invertNumbers: () => ({ type: INVERT_NUMBERS }),
};

export default CalculateReducer;
