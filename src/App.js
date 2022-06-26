import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import ScreenComponent from "./components/ScreenComponent";
import ButtonsMap from "./components/ButtonsMap";

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

const App = () => (
	<div className="wrapper">
		<ScreenComponent />
		<ButtonsMap Values={Values} />
	</div>
);

const SamuraiApp = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

export default SamuraiApp;
