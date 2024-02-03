import React from "react";
import Data from "./api/data";
import Stats from "./api/statsData";
import Main from "./Components/Main";
import Grid from "./Components/Grid/Grid";

function App() {
  const { players } = Data();
  const { stats } = Stats();

  let modifiedStatsArray = [];
  stats.forEach((stat) => {
    modifiedStatsArray.push(stat.data[0]);
  });

  return (
    <Main>
      <Grid />
    </Main>
  );
}

export default App;
