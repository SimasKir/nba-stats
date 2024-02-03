import React, { useState, useEffect } from "react";

const API_URL = "https://www.balldontlie.io/api/v1/players";

const mvpPlayers = [
  {
    name: "Joel",
    lastName: "Embiid",
    id: "145",
  },
  {
    name: "Nicola",
    lastName: "Jokic",
    id: "246",
  },
  {
    name: "Shai",
    lastName: "Gilgeous-Alexander",
    id: "175",
  },
  {
    name: "Giannis",
    lastName: "Antetokounmpo",
    id: "15",
  },
  // {
  //   name: "Luca",
  //   lastName: "Doncic",
  //   id: "132",
  // },
  {
    name: "Jason",
    lastName: "Tatum",
    id: "434",
  },
];

export default function Data() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const responses = await Promise.all(
          mvpPlayers.map(async (player) => {
            const response = await fetch(`${API_URL}/${player.id}`);
            return response.json();
          }),
        );

        setPlayers(responses);
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
