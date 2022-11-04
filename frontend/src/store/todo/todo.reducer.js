import { toast } from "react-toastify";

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_TODOS":
      return action.payload;
    case "ADD_TODO":
      toast.success("New Todo Added Successfully...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return [action.payload, ...state];
    case "UPDATE_TODO":
      toast.success("Todo Updated Successfully...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state.map((todo) =>
        todo._id === action.payload._id ? action.payload : todo
      );
    case "CHECK_TODO":
      toast.success("Todo status changed Successfully...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state.map((todo) =>
        todo._id === action.payload._id ? action.payload : todo
      );
    default:
      return state;
  }
};
