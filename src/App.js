import React from "react";
import Main from "./Components/Main";
import Grid from "./Components/Grid/Grid";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Main>
      <Provider store={store}>
        <Grid />
      </Provider>
    </Main>
  );
}

export default App;
