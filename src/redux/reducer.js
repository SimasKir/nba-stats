import { SET } from "./actions";
// import Data from "../api/data";

// const data = await Data();

export const initialState = { data: [] };

export const reducer = (state = initialState, action) => {
  if (action.type === SET) {
    return { ...state, data: action.payload };
  }

  return state;
};
