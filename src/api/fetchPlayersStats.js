import { useState, useEffect } from "react";
import PLAYERS from "../constants/players-info";

export default function FetchPlayersStats() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      const playersQuery = PLAYERS.reduce((accumulator, player, index) => {
        const query = `&player_ids[]=${player.id}`;
        return accumulator + query;
      }, "");
      const headers = {
        Authorization: process.env.REACT_APP_API_KEY,
      };
      try {
        const response = await fetch(
          `https://api.balldontlie.io/v1/season_averages?season=2023${playersQuery}`,
          {
            headers,
          },
        );
        const data = await response.json();
        let orderArray = [
          data.data[3],
          data.data[2],
          data.data[0],
          data.data[1],
          data.data[4],
        ];
        setStats(orderArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchStats();
  }, []);

  return {
    stats,
  };
}
