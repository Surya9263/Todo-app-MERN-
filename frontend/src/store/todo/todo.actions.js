import axios from "axios";
import { toast } from "react-toastify";
import { store } from "..";
import { setHeaders } from "../../api";

export const getTodos = () => async (dispatch) => {
  try {
    let res = await axios.get("https://todo-app-mern-production.up.railway.app/api/todos", setHeaders());
    dispatch({
      type: "GET_TODOS",
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addTodo = (newTodo) => async (dispatch) => {
  const author = store.getState().auth.name;
  const uid = store.getState().auth._id;
  // console.log(newTodo);
  try {
    let res = await axios.post(
      "https://todo-app-mern-production.up.railway.app/api/todos",
      { ...newTodo, author, uid },
      setHeaders()
    );
    dispatch({
      type: "ADD_TODO",
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};

export const updateTodo = (updatedTodo, id) => async (dispatch) => {
  try {
    let res = await axios.put(
      `https://todo-app-mern-production.up.railway.app/api/todos/${id}`,
      updatedTodo,
      setHeaders()
    );
    dispatch({
      type: "UPDATE_TODO",
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};
export const checkTodo = (id) => async (dispatch) => {
  try {
    let res = await axios.patch(
      `https://todo-app-mern-production.up.railway.app/api/todos/${id}`,
      {},
      setHeaders()
    );
    dispatch({
      type: "CHECK_TODO",
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};
export const deleteTodo = (id) => async (dispatch) => {
  try {
    let res = await axios.delete(
      `https://todo-app-mern-production.up.railway.app/api/todos/${id}`,
      setHeaders()
    );
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};
