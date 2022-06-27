import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import { Wrapper } from "./components/styled-components/Wrapper";
import store from "./Redux/store";
import ScreenComponent from "./components/ScreenComponent";
import ButtonsMap from "./components/ButtonsMap";

const App = () => (
	<Wrapper>
		<ScreenComponent />
		<ButtonsMap />
	</Wrapper>
);

const SamuraiApp = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

export default SamuraiApp;
