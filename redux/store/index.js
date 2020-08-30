import { createStore } from "redux";
import allReducers from "../reducers";

const store = createStore(allReducers);

const dispatch = store.dispatch;
const storeState = store.getState();

export default store;


export { dispatch, storeState };