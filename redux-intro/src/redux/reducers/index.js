import {combineReducers} from "redux";
import counterReducer from "./counterReducer";

const reducers = combineReducers({
    counterReducer:counterReducer // orjinali "counterReducer:counterReducer" budur.
});

export default reducers;