import { useState, useEffect } from "react";
import PLAYERS from "../constants/players-info";
import { store } from "../redux/store";
import { set } from "../redux/actions";

export default function Data() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const responses = await Promise.all(
          PLAYERS.map(async (player) => {
            const response = await fetch(
              `https://www.balldontlie.io/api/v1/players/${player.id}`,
            );
            return response.json();
          }),
        );

        setPlayers(responses);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    store.dispatch(set());
    fetchPlayers();
  }, []);

  return {
    players,
  };
}
