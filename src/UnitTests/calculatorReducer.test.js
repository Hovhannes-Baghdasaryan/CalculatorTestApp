import CalculateReducer, { actions } from "./../Redux/Reducers/CalculateReducer";

it("SET_METHOD REDUCER TEST", () => {
	const state = {
		method: null,
		number: 15,
		reserve: 0,
	};

	// 1. Action
	let action = actions.SetMethod("+");

	// 2. newState
	let newState = CalculateReducer(state, action);

	expect(newState.method).toBe(action.method);
	expect(newState.number).toBe(0);
	expect(newState.reserve).toBe(!state.reserve && state.number ? state.number : state.reserve);
});

it("SET_NUMBERS", () => {
	const state = {
		method: null,
		number: 15,
		reserve: 0,
	};

	// 1. Action
	let action = actions.SetNumbers("10");

	// 2. newState
	let newState = CalculateReducer(state, action);

	expect(newState.reserve).toBe(!state.method ? 0 : state.reserve);
	expect(newState.number).toBe(!state.number && action.value === "0" ? 0 : !state.number ? +action.value : +(`${state.number}` + action.value));
});

it("EQUAL_NUMBERS", () => {
	const state = {
		method: "x",
		number: 0,
		reserve: 15,
	};

	// 1. Action
	let action = actions.EqualNumbers();

	// 2. newState
	let newState = CalculateReducer(state, action);

	expect(newState.method).toBe(null);
	expect(newState.number).toBe(0);
	expect(newState.reserve).toBe(0);
});

it("CLEAR NUMBERS", () => {
	const state = {
		method: "x",
		number: 6,
		reserve: 15,
	};

	// 1. Action
	let action = actions.clearNumbers();

	// 2. newState
	let newState = CalculateReducer(state, action);

	expect(newState.method).toBe(null);
	expect(newState.number).toBe(0);
	expect(newState.reserve).toBe(0);
});

it("INVERT_NUMBERS", () => {
	const state = {
		method: "x",
		number: 10,
		reserve: 45,
	};

	// 1. Action
	let action = actions.invertNumbers();

	// 2. newState
	let newState = CalculateReducer(state, action);

	expect(newState.method).toBe("x");
	expect(newState.number).toBe(state.number * -1);
	expect(newState.reserve).toBe(!state.number ? state.reserve * -1 : state.reserve);
});
