import { methodSelector } from "../Redux/Selectors/methodSelector";
import { numberSelector, reserveSelector } from "./../Redux/Selectors/numbersSelector";

const state = {
	Calculate: {
		number: 10,
		reserve: 5,
		method: "+",
	},
};

it("Selectors", () => {
	expect(methodSelector(state)).toBe("+");
	expect(numberSelector(state)).toBe(10);
	expect(reserveSelector(state)).toBe(5);
});
