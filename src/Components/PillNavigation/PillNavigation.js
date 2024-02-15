import React, { useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Text from "../Text/Text";
import { store } from "../../redux/store";

const PillNavigation = ({
  children,
  className,
  findPlayerById,
  handleToggle,
  setOpenIndex,
  openIndex,
  ...props
}) => {
  const classes = cx("PillNavigation flex flex-column", className);
  const [pillIndex, setPillIndex] = useState(0);

  const statsData = store.getState().data.stats;

  const assistsArray = statsData.map(({ player_id, ast }) => ({
    player_id,
    ast,
  }));
  const pointsArray = statsData.map(({ player_id, pts }) => ({
    player_id,
    pts,
  }));
  const reboundsArray = statsData.map(({ player_id, reb }) => ({
    player_id,
    reb,
  }));
  const sortedAssistsArray = assistsArray.sort((a, b) => b.ast - a.ast);
  const sortedPointsArray = pointsArray.sort((a, b) => b.pts - a.pts);
  const sortedReboundsArray = reboundsArray.sort((a, b) => b.reb - a.reb);

  const test = [
    {
      name: "Points",
      index: 0,
      stats: sortedPointsArray,
    },
    {
      name: "Assists",
      index: 1,
      stats: sortedAssistsArray,
    },
    {
      name: "Rebounds",
      index: 2,
      stats: sortedReboundsArray,
    },
  ];

  const handlePillClick = (index, id) => {
    setPillIndex(index);
    if (openIndex === id) {
      return;
    } else {
      setOpenIndex(id);
    }
    handleToggle(id);
  };

  return (
    <div className={classes} {...props}>
      <div className="Navigation flex flex-direction-column-row align-center box-border p-12 br-8 mb-24">
        {test.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => handlePillClick(index, item.stats[0].player_id)}
            >
              <Text
                tagStyle="base"
                className={`Pill font-light bebas-neue-regular p-12 ${pillIndex === index ? "box-border-active" : "box-border"} br-8 ${
                  index === 1 ? "mx-md-y-x" : ""
                }`}
              >
                {item.name}
              </Text>
            </div>
          );
        })}
      </div>
      <div className="Statistics">
        <div
          className={`flex-column w-fit-content ${pillIndex === 0 ? "d-block" : "d-none"}`}
        >
          {sortedPointsArray.map((item, index) => {
            return (
              <div
                key={item.player_id}
                className="flex flex-direction-row justify-between mb-12 border-bottom py-12"
              >
                <div className="flex flex-direction-row">
                  <Text
                    tagStyle="base"
                    className="m-0 bebas-neue-regular font-light mr-12"
                    text={index + 1 + "."}
                  />
                  <Text
                    tagStyle="base"
                    className="font-light bebas-neue-regular mr-12"
                    text={findPlayerById(item.player_id)}
                  />
                </div>
                <Text tagStyle="base" className="font-light grape-nuts-regular">
                  {item.pts}
                </Text>
              </div>
            );
          })}
        </div>

        <div
          className={`flex-column w-fit-content ${pillIndex === 1 ? "d-block" : "d-none"}`}
        >
          {sortedAssistsArray.map((item, index) => {
            return (
              <div
                key={item.player_id}
                className="flex flex-direction-row justify-between mb-12 border-bottom py-12"
              >
                <div className="flex flex-direction-row">
                  <Text
                    tagStyle="base"
                    className="m-0 bebas-neue-regular font-light mr-12"
                    text={index + 1 + "."}
                  />
                  <Text
                    tagStyle="base"
                    className="font-light bebas-neue-regular mr-12"
                    text={findPlayerById(item.player_id)}
                  />
                </div>
                <Text tagStyle="base" className="font-light grape-nuts-regular">
                  {item.ast}
                </Text>
              </div>
            );
          })}
        </div>

        <div
          className={`flex-column w-fit-content ${pillIndex === 2 ? "d-block" : "d-none"}`}
        >
          {sortedReboundsArray.map((item, index) => {
            return (
              <div
                key={item.player_id}
                className="flex flex-direction-row justify-between mb-12 border-bottom py-12"
              >
                <div className="flex flex-direction-row">
                  <Text
                    tagStyle="base"
                    className="m-0 bebas-neue-regular font-light mr-12"
                    text={index + 1 + "."}
                  />
                  <Text
                    tagStyle="base"
                    className="font-light bebas-neue-regular mr-12"
                    text={findPlayerById(item.player_id)}
                  />
                </div>
                <Text tagStyle="base" className="font-light grape-nuts-regular">
                  {item.reb}
                </Text>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

PillNavigation.propTypes = {
  className: PropTypes.string,
};

PillNavigation.defaultProps = {
  "section-name": "PillNavigation",
};

export default PillNavigation;
