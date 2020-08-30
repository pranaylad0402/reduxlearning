import themeReducer from "./theme";

import { combineReducers } from "redux";

/*
 * In order to reset all reducers back to their initial states when user logout,
 * rewrite rootReducer to assign 'undefined' to state when logout
 *
 * If state passed to reducer is 'undefined', then the next state reducer returns
 * will be its initial state instead; since we have assigned it as the default value
 * of reducer's state parameter
 *  *   ex: const Reducer = (state = InitialState, action) => { ... }
 *
 * See: https://goo.gl/GSJ98M and combineReducers() source codes for details
 * See: https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store
 */

const appReducer = combineReducers({
    theme: themeReducer,

});

const rootReducer = (state, action) => {
    if (action.type === "RESET_ALL_STATES") {
        state = undefined;
    }

    return appReducer(state, action);
};
export default rootReducer;