const FetchPlayerData = async (name, lastName) => {
  try {
    const response = await fetch(
      `https://www.balldontlie.io/api/v1/players?per_page=100&search=${name} ${lastName}`,
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.data[0];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default FetchPlayerData;
