import { useState, useEffect } from "react";
import PLAYERS from "../constants/players-info";

export default function FetchPlayersData() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const playersQuery = PLAYERS.reduce((accumulator, player, index) => {
        const separator = index === 0 ? "?" : "&";
        const query = `${separator}player_ids[]=${player.id}`;
        return accumulator + query;
      }, "");
      const headers = {
        Authorization: process.env.REACT_APP_API_KEY,
      };
      try {
        const response = await fetch(
          `https://api.balldontlie.io/v1/players/${playersQuery}`,
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
        setPlayers(orderArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchPlayers();
  }, []);

  return {
    players,
  };
}
