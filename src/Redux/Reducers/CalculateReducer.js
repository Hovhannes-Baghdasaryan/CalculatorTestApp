const SET_METHOD = "METHOD";
const SET_NUMBERS = "SET_NUMBERS";
const EQUAL_NUMBERS = "EQUAL_NUMBERS";
const CLEAR_NUMBERS = "CLEAR_NUMBERS";
const INVERT_NUMBERS = "INVERT_NUMBERS";

const initialState = {
	Values: [
		{
			arr: [
				{ element: "C", id: 1 },
				{ element: "+/_", id: 2 },
				{ element: "%", id: 3 },
				{ element: "/", id: 4 },
			],
			id: 1,
		},
		{
			arr: [
				{ element: "7", id: 5 },
				{ element: "8", id: 6 },
				{ element: "9", id: 7 },
				{ element: "x", id: 8 },
			],
			id: 2,
		},
		{
			arr: [
				{ element: "4", id: 9 },
				{ element: "5", id: 10 },
				{ element: "6", id: 11 },
				{ element: "-", id: 12 },
			],
			id: 3,
		},
		{
			arr: [
				{ element: "1", id: 13 },
				{ element: "2", id: 14 },
				{ element: "3", id: 15 },
				{ element: "+", id: 16 },
			],
			id: 4,
		},
		{
			arr: [
				{ element: "0", id: 17 },
				{ element: ".", id: 18 },
				{ element: "=", id: 19 },
			],
			id: 5,
		},
	],
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
