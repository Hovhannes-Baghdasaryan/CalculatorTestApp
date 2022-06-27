import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

describe("Screen Testing", () => {
	it("Button Clicker Test", () => {
		const { getAllByTestId, getByTestId } = render(<App />);

		const buttons = getAllByTestId("button_number");
		expect(getByTestId("screen_number")).toHaveTextContent(0);

		let numbersObj = {
			number0: buttons[16],
			number1: buttons[12],
			number2: buttons[13],
			number3: buttons[14],
			number4: buttons[8],
			number5: buttons[9],
			number6: buttons[10],
			number7: buttons[4],
			number8: buttons[5],
			number9: buttons[6],
		};

		let methodsObj = {
			Add: buttons[15],
			Sub: buttons[11],
			Mul: buttons[7],
			Divide: buttons[3],
			Equal: buttons[18],
			Invert: buttons[1],
			Clean: buttons[0],
		};

		userEvent.click(numbersObj.number7); // number 7
		userEvent.click(numbersObj.number8); // number 8
		userEvent.click(methodsObj.Mul); // method X / Mul...
		userEvent.click(numbersObj.number2); // number 2
		userEvent.click(methodsObj.Equal); // '=' method

		expect(getByTestId("screen_number")).toHaveTextContent(156);

		userEvent.click(methodsObj.Clean); // Clean

		expect(getByTestId("screen_number")).toHaveTextContent(0);

		userEvent.click(numbersObj.number8); // number 8
		userEvent.click(methodsObj.Divide); // Divide
		userEvent.click(numbersObj.number0); // number 0
		userEvent.click(methodsObj.Equal); // "=" method

		expect(getByTestId("screen_number")).toHaveTextContent("Can't be called");
	});
});
