import React, { useState } from "react";
import cx from "classnames";
import { store } from "../../redux/store";
import {
  updateSearchInfo,
  updateSearchStats,
  updateSearchNull,
} from "../../redux/actions";
import FetchPlayerData from "../../api/fetchPlayerData";
import FetchPlayerStats from "../../api/fetchPlayerStats";
import Text from "../Text/Text";
import Button from "../Button/Button";
import Stats from "../Stats/Stats";
import Row from "../Row/Row";

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
  });

  const [playerInfo, setPlayerInfo] = useState(store.getState().data.newPlayer);
  const [playerStats, setPlayerStats] = useState(
    store.getState().data.newPlayer,
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormData({
      name: "",
      lastName: "",
    });

    try {
      const playerInfo = await FetchPlayerData(
        formData.name,
        formData.lastName,
      );
      if (playerInfo) {
        store.dispatch(updateSearchInfo(playerInfo));

        const playerId = playerInfo.id;

        const playerStats = await FetchPlayerStats(playerId);
        store.dispatch(updateSearchStats(playerStats));
        setPlayerInfo(store.getState().data.newPlayer.info);
        setPlayerStats(store.getState().data.newPlayer.stats);
        setShowCompare(null);
      } else {
        store.dispatch(updateSearchNull());
        setPlayerInfo(null);
        setPlayerStats(null);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  const [showCompare, setShowCompare] = useState(null);

  const compareWithMvp = () => {
    const mvpInfo = store.getState().data.players;
    const mvpStats = store.getState().data.stats;
    const newPlayerInfo = store.getState().data.newPlayer.info;
    const newPlayerStats = store.getState().data.newPlayer.stats;

    const mergedPlayersObject = {
      players: [...mvpInfo, newPlayerInfo],
      stats: [...mvpStats, newPlayerStats],
    };

    const sortedAssistsArray = [...mergedPlayersObject.stats].sort(
      (a, b) => b.ast - a.ast,
    );
    const sortedPointsArray = [...mergedPlayersObject.stats].sort(
      (a, b) => b.pts - a.pts,
    );
    const sortedReboundsArray = [...mergedPlayersObject.stats].sort(
      (a, b) => b.reb - a.reb,
    );
    const sortedPlayersStatsArray = {
      players: [...mergedPlayersObject.players],
      assists: [...sortedAssistsArray],
      points: [...sortedPointsArray],
      rebounds: [...sortedReboundsArray],
    };
    setShowCompare(sortedPlayersStatsArray);
  };

  const findPlayerById = (id, playersArray) => {
    const player = playersArray.find((player) => player.id === id);
    return `${player.first_name} ${player.last_name}`;
  };

  return (
    <form onSubmit={handleSubmit} className="Form flex-column">
      {playerInfo && playerStats ? (
        <Text className="bebas-neue-regular font-light flex justify-content-center pb-10">
          Check stats bellow!
        </Text>
      ) : (
        <Text className="bebas-neue-regular font-light flex justify-content-center pb-10">
          Please enter correct name and last name
        </Text>
      )}
      <Row justify="between" className="py-10 pb-0 border-top">
        <label
          htmlFor="name"
          className="bebas-neue-regular font-light flex align-center"
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="box-border border-none bg-primary bebas-neue-regular font-light p-10"
          value={formData.name}
          onChange={handleChange}
        />
      </Row>
      <Row justify="between" className="py-10">
        <label
          htmlFor="lastName"
          className="bebas-neue-regular font-light flex align-center"
        >
          Last name:
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="box-border border-none bg-primary bebas-neue-regular font-light p-10"
          value={formData.lastName}
          onChange={handleChange}
        />
      </Row>
      <Row justify="center" className="py-10 border-bottom">
        <Button type="submit">Submit</Button>
        {playerInfo && playerStats && (
          <Button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              compareWithMvp();
            }}
          >
            Compare stats with MVP candidates
          </Button>
        )}
      </Row>
      {playerInfo && playerStats && !showCompare && (
        <Text
          tagStyle="big"
          className="bebas-neue-regular font-light flex justify-content-center border-top py-10"
          text={playerInfo.first_name + " " + playerInfo.last_name}
        />
      )}
      {playerInfo && playerStats && !showCompare && (
        <Stats stats={playerStats} />
      )}
      {showCompare && (
        <div className="flex flex-direction-row justify-content-between">
          <div className="w-30">
            <Text
              tagStyle="base"
              className="bebas-neue-regular font-light py-10"
            >
              Points
            </Text>
            {showCompare.points.map((player, index) => {
              return (
                <div className="flex flex-direction-row w-100 justify-content-between">
                  <div className="flex flex-direction-row">
                    <Text
                      tagStyle="small"
                      className="m-0 bebas-neue-regular font-light"
                      text={index + 1 + "."}
                    />
                    <Text
                      tagStyle="small"
                      className={cx(
                        "m-0 bebas-neue-regular",
                        player.player_id === playerStats.player_id
                          ? "font-highlight"
                          : "font-light",
                      )}
                      text={findPlayerById(
                        player.player_id,
                        showCompare.players,
                      )}
                    />
                  </div>
                  <Text
                    tagStyle="small"
                    className="m-0 bebas-neue-regular font-light"
                    text={player.pts}
                  />
                </div>
              );
            })}
          </div>
          <div className="w-30 border-x">
            <Text
              tagStyle="base"
              className="bebas-neue-regular font-light py-10"
            >
              Assists
            </Text>
            {showCompare.assists.map((player, index) => {
              return (
                <div className="flex flex-direction-row w-100 justify-content-between">
                  <div className="flex flex-direction-row">
                    <Text
                      tagStyle="small"
                      className="m-0 bebas-neue-regular font-light"
                      text={index + 1 + "."}
                    />
                    <Text
                      tagStyle="small"
                      className={cx(
                        "m-0 bebas-neue-regular",
                        player.player_id === playerStats.player_id
                          ? "font-highlight"
                          : "font-light",
                      )}
                      text={findPlayerById(
                        player.player_id,
                        showCompare.players,
                      )}
                    />
                  </div>
                  <Text
                    tagStyle="small"
                    className="m-0 bebas-neue-regular font-light"
                    text={player.ast}
                  />
                </div>
              );
            })}
          </div>
          <div className="w-30">
            <Text
              tagStyle="base"
              className="bebas-neue-regular font-light py-10"
            >
              Rebounds
            </Text>
            {showCompare.rebounds.map((player, index) => {
              return (
                <div className="flex flex-direction-row w-100 justify-content-between">
                  <div className="flex flex-direction-row">
                    <Text
                      tagStyle="small"
                      className="m-0 bebas-neue-regular font-light"
                      text={index + 1 + "."}
                    />
                    <Text
                      tagStyle="small"
                      className={cx(
                        "m-0 bebas-neue-regular",
                        player.player_id === playerStats.player_id
                          ? "font-highlight"
                          : "font-light",
                      )}
                      text={findPlayerById(
                        player.player_id,
                        showCompare.players,
                      )}
                    />
                  </div>
                  <Text
                    tagStyle="small"
                    className="m-0 bebas-neue-regular font-light"
                    text={player.reb}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </form>
  );
};

export default MyForm;
