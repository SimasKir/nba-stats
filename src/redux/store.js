import { createStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

// export default configureStore({
//   reducer: {
//     players: reducer,
//   },
// });

export const store = createStore(reducer);

console.log(store);
