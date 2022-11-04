import axios from "axios";
import { toast } from "react-toastify";

export const getTodos = () => async (dispatch) => {
  try {
    let res = await axios.get("http://localhost:5000/api/todos");
    dispatch({
      type: "GET_TODOS",
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addTodo = (todo) => async (dispatch) => {
  try {
    let res = await axios.post("http://localhost:5000/api/todos", todo);
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
      updatedTodo
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
    let res = await axios.put(`http://localhost:5000/api/todos/${id}`, {});
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
