import {
  SET,
  UPDATE_SEARCH_INFO,
  UPDATE_SEARCH_STATS,
  UPDATE_SEARCH_NULL,
} from "./actions";

export const initialState = { data: [] };

export const reducer = (state = initialState, action) => {
  if (action.type === SET) {
    return { ...state, data: action.payload };
  }

  if (action.type === UPDATE_SEARCH_INFO) {
    return {
      data: {
        ...state.data,
        newPlayer: {
          info: action.payload,
        },
      },
    };
  }

  if (action.type === UPDATE_SEARCH_STATS) {
    return {
      data: {
        ...state.data,
        newPlayer: {
          ...state.data.newPlayer,
          stats: action.payload,
        },
      },
    };
  }

  if (action.type === UPDATE_SEARCH_NULL) {
    return {
      data: {
        ...state.data,
        newPlayer: null,
      },
    };
  }

  return state;
};
