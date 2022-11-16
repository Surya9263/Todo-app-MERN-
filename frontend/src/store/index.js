import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/auth.reducer";
import { todoReducer } from "./todo/todo.reducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  auth:authReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
