import React, { useState, useEffect } from 'react';

const API_URL = 'https://www.balldontlie.io/api/v1/players';

const mvpPlayers = [
  {
    name: 'Joel',
    lastName: 'Embiid',
    id: '145',
  },
  {
    name: 'Nicola',
    lastName: 'Jokic',
    id: '246',
  },
  {
    name: 'Shai',
    lastName: 'Gilgeous-Alexander',
    id: '175',
  },
  {
    name: 'Giannis',
    lastName: 'Antetokounmpo',
    id: '15',
  },
  {
    name: 'Luca',
    lastName: 'Doncic',
    id: '132',
  },
];

export default function Stats() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const responses = await Promise.all(
          mvpPlayers.map(async (player) => {
            const response = await fetch(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${player.id}`);
            return response.json();
          })
        );

        setStats(responses);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchStats();
  }, []);

  return {
    stats,
  };
}