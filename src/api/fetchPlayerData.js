const FetchPlayerData = async (name, lastName) => {
  const headers = {
    Authorization: process.env.REACT_APP_API_KEY,
  };
  try {
    const response = await fetch(
      `https://api.balldontlie.io/v1/players/?search=${lastName}&first_name=${name}`,
      {
        headers,
      },
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
