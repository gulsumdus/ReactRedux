import * as actionTypes from "../actions/actionTypes";


const counterReducer = (state = 0, action = {}) => {
    if (!action || !action.type) {
        return state;  // Prevent breaking on undefined action
    }
    switch (action.type) {
        case actionTypes.INCREASE_COUNTER:
            return state = state + action.payload;
        case actionTypes.DECREASE_COUNTER:
            return state = state - action.payload;
        case actionTypes.INCREASE_BY_TWO_COUNTER:
            return state = state + action.payload;
        default:
            return state;
    }
};

export default counterReducer;
