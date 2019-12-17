import { combineReducers } from "redux";
import todoReducers from "./todo_reducers";

const rootReducer = combineReducers({
  todos: todoReducers
});

export default rootReducer;
