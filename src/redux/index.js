import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

import thunk from "redux-thunk";

const middleware = [thunk];
const initial_state = {};

export default createStore(rootReducer, initial_state, applyMiddleware(...middleware));
