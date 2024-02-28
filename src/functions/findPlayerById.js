const findPlayerById = (id, playersArray) => {
  if (!Array.isArray(playersArray)) {
    console.error("Error: array is not correct");
    return null;
  }
  const player = playersArray.find((player) => player.id === id);
  return `${player.first_name} ${player.last_name}`;
};

export default findPlayerById;
