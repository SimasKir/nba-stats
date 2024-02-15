import { useState, useEffect } from "react";
import PLAYERS from "../constants/players-info";

export default function Stats() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const responses = await Promise.all(
          PLAYERS.map(async (player) => {
            const response = await fetch(
              `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${player.id}`,
            );
            return response.json();
          }),
        );
        let modifiedStatsArray = [];
        responses.forEach((stat) => {
          modifiedStatsArray.push(stat.data[0]);
        });
        setStats(modifiedStatsArray);
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
