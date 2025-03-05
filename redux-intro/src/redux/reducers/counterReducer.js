import * as actionTypes from "../actions/actionTypes";

const counterReducer = (state = 0, action) => {
    switch (action.type) {  // Removed the extra space here
        case actionTypes.INCREASE_COUNTER:
            return state + action.payload;  // Directly return the new state
        case actionTypes.DECREASE_COUNTER:
            return state - action.payload;  // Directly return the new state
        case actionTypes.INCREASE_BY_TWO_COUNTER:
            return state + action.payload;  // Directly return the new state
        default:
            return state;  // Return current state if action type doesn't match
    }
};

export default counterReducer;
