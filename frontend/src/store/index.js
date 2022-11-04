import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "./todo/todo.reducer";

const rootReducer = combineReducers({
  todos: todoReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
