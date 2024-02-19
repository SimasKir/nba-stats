export const SET = "SET";
export const UPDATE_SEARCH_INFO = "UPDATE_SEARCH_INFO";
export const UPDATE_SEARCH_STATS = "UPDATE_SEARCH_STATS";
export const UPDATE_SEARCH_NULL = "UPDATE_SEARCH_NULL";

export const set = (value) => ({ type: SET, payload: value });

export const updateSearchInfo = (value) => ({
  type: UPDATE_SEARCH_INFO,
  payload: value,
});

export const updateSearchStats = (value) => ({
  type: UPDATE_SEARCH_STATS,
  payload: value,
});

export const updateSearchNull = () => ({
  type: UPDATE_SEARCH_NULL,
});
