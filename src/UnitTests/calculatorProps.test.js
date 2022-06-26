import { render, screen } from "@testing-library/react";
import ButtonComponent from "./../components/ButtonComponent";
import ButtonsMap from "./../components/ButtonsMap";
import withRedux from "./../hoc/withProviderForTests";

const arr = [
	{ element: "C", id: 1 },
	{ element: "+/_", id: 2 },
	{ element: "%", id: 3 },
	{ element: "/", id: 4 },
];

it("Props Render", () => {
	const { getAllByTestId } = render(withRedux(<ButtonComponent arr={arr} />));

	arr.forEach((e, i) => {
		expect(getAllByTestId("button_number")[i]).toHaveTextContent(e.element);
	});
});

const Values = [
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
];

it("props passing the main Values", () => {
	const { getAllByTestId } = render(withRedux(<ButtonsMap Values={Values} />));

	Values.forEach((element, index) => {
		element.arr.forEach((e, i) => {
			expect(getAllByTestId("button_number")[index * 4 + i]).toHaveTextContent(e.element);
		});
	});
});
