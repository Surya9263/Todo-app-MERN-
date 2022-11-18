import axios from "axios";
import { toast } from "react-toastify";
import { store } from "..";
import { setHeaders } from "../../api";

export const getTodos = () => async (dispatch) => {
  try {
    let res = await axios.get("http://localhost:5000/api/todos", setHeaders());
    dispatch({
      type: "GET_TODOS",
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addTodo = (todo) => async (dispatch) => {
  const author = store.getState().auth.name;
  const uid = store.getState().auth._id;
  try {
    let res = await axios.post(
      "http://localhost:5000/api/todos",
      { ...todo, author, uid },
      setHeaders()
    );
    dispatch({
      type: "ADD_TODO",
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};

export const updateTodo = (updatedTodo, id) => async (dispatch) => {
  try {
    let res = await axios.put(
      `http://localhost:5000/api/todos/${id}`,
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
      `http://localhost:5000/api/todos/${id}`,
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
      `http://localhost:5000/api/todos/${id}`,
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
