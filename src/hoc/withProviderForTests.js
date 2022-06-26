import { Provider } from "react-redux";
import store from "./../Redux/store";

const withRedux = component => <Provider store={store}>{component}</Provider>;

export default withRedux;
