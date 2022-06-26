import { render, screen } from "@testing-library/react";
import App from "../App";
import withRedux from "../hoc/withProviderForTests";
import userEvent from "@testing-library/user-event";

describe("Screen Testing", () => {
	it("Button Clicker Test", () => {
		const { getAllByTestId, getByTestId } = render(<App />);

		const buttons = getAllByTestId("button_number");
		expect(getByTestId("screen_number")).toHaveTextContent(0);

		userEvent.click(buttons[4]); // number 7
		userEvent.click(buttons[5]); // number 8
		userEvent.click(buttons[7]); // method X / Mul...
		userEvent.click(buttons[13]); // number 1
		userEvent.click(buttons[18]); // '=' method

		expect(getByTestId("screen_number")).toHaveTextContent(156);

		userEvent.click(buttons[0]); // Clean

		expect(getByTestId("screen_number")).toHaveTextContent(0);

		userEvent.click(buttons[5]); // number 8
		userEvent.click(buttons[3]); // Divide
		userEvent.click(buttons[16]); // number 0
		userEvent.click(buttons[18]); // "=" method

		expect(getByTestId("screen_number")).toHaveTextContent("Can't be called");
	});
});
