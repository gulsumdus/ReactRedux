import {combineReducers} from "redux";
import counterReducer from "./counterReducer";

const reducers = combineReducers({
    counterReducer // orjinali "counterReducer:counterReducer" budur.
});

export default reducers;