import axios from "axios";
import { toast } from "react-toastify";
import { store } from "..";

export const signUp = (user) => async (dispatch) => {
  try {
    let res = await axios.post("https://todo-app-mern-production.up.railway.app/api/signup", user);
    localStorage.setItem("token", res.data);
    dispatch({
      type: "SIGN_UP",
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.res?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};

export const signIn = (creds) => async (dispatch) => {
  try {
    let res = await axios.post("https://todo-app-mern-production.up.railway.app/api/signin", creds);
    localStorage.setItem("token", res.data);
    dispatch({
      type: "SIGN_IN",
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.res?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  const token = store.getState().auth.token;
  if (token) {
    dispatch({
      type: "USER_LOADED",
      payload: token,
    });
  } else {
    return null;
  }
};

export const signOut = () => async (dispatch) => {
  dispatch({ type: "SIGN_OUT" });
};
