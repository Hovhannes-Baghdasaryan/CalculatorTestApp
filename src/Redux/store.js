import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import CalculateReducer from "./Reducers/CalculateReducer";

let rootReducer = combineReducers({
	Calculate: CalculateReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

window.store = store;

export default store;
