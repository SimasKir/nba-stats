import React from 'react';
import Data from './api/data';
import Stats from './api/statsData';
import Main from './Components/Main';

function App() {
  const { players } = Data();
  const { stats } = Stats();

  let modifiedStatsArray = [];
  stats.forEach((stat) => {
    modifiedStatsArray.push(stat.data[0]);
  })

  return (
    
      <Main>
<ul>
        {players.map((player) => (
          <li className='grape-nuts-regular' key={player.id}>{player.first_name}</li>
        ))}
        {modifiedStatsArray.map((stat, index) => (
          <div className='flex flex-row'>
          <div className='bebas-neue-regular'>Assists</div>
          <div className='permanent-marker-regular' key={index}>{stat.ast}</div>

          </div>
        ))}
      </ul>
      </Main>
      
    
  );
}

export default App;