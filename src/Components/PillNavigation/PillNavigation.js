import React, { useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Text from "../Text/Text";

const PillNavigation = ({
  children,
  className,
  findPlayerById,
  handleToggle,
  points,
  assists,
  rebounds,
  setOpenIndex,
  ...props
}) => {
  const classes = cx("PillNavigation", className);
  const [pillIndex, setPillIndex] = useState(0);
  //   setOpenIndex(points[0].player_id);

  const test = [
    {
      name: "Points",
      index: 0,
      stats: points,
    },
    {
      name: "Assists",
      index: 1,
      stats: assists,
    },
    {
      name: "Rebounds",
      index: 2,
      stats: rebounds,
    },
  ];

  const handlePillClick = (index, id) => {
    setPillIndex(index);
    console.log(id);
    handleToggle(id);
  };

  return (
    <div className={classes} {...props}>
      <div className="Navigation box-border p-12 br-8 mb-24">
        {test.map((item, index) => {
          return (
            <div
              onClick={() => handlePillClick(index, item.stats[0].player_id)}
            >
              <Text
                tagStyle="big"
                className={`Pill font-light bebas-neue-regular p-12 ${pillIndex === index ? "box-border-active" : "box-border"} br-8 ${
                  index === 1 ? "mx-12" : ""
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
          {points.map((item, index) => {
            return (
              <div
                key={item.player_id}
                className="flex-row justify-between mb-12 border-bottom py-12"
              >
                <div className="flex-row">
                  <Text
                    tagStyle="big"
                    className="m-0 bebas-neue-regular font-light mr-12"
                    text={index + 1 + "."}
                  />
                  <Text
                    tagStyle="big"
                    className="font-light bebas-neue-regular mr-12"
                    text={findPlayerById(item.player_id)}
                  />
                </div>
                <Text tagStyle="big" className="font-light grape-nuts-regular">
                  {item.pts}
                </Text>
              </div>
            );
          })}
        </div>

        <div
          className={`flex-column w-fit-content ${pillIndex === 1 ? "d-block" : "d-none"}`}
        >
          {assists.map((item, index) => {
            return (
              <div
                key={item.player_id}
                className="flex-row justify-between mb-12 border-bottom py-12"
              >
                <div className="flex-row">
                  <Text
                    tagStyle="big"
                    className="m-0 bebas-neue-regular font-light mr-12"
                    text={index + 1 + "."}
                  />
                  <Text
                    tagStyle="big"
                    className="font-light bebas-neue-regular mr-12"
                    text={findPlayerById(item.player_id)}
                  />
                </div>
                <Text tagStyle="big" className="font-light grape-nuts-regular">
                  {item.ast}
                </Text>
              </div>
            );
          })}
        </div>

        <div
          className={`flex-column w-fit-content ${pillIndex === 2 ? "d-block" : "d-none"}`}
        >
          {rebounds.map((item, index) => {
            return (
              <div
                key={item.player_id}
                className="flex-row justify-between mb-12 border-bottom py-12"
              >
                <div className="flex-row">
                  <Text
                    tagStyle="big"
                    className="m-0 bebas-neue-regular font-light mr-12"
                    text={index + 1 + "."}
                  />
                  <Text
                    tagStyle="big"
                    className="font-light bebas-neue-regular mr-12"
                    text={findPlayerById(item.player_id)}
                  />
                </div>
                <Text tagStyle="big" className="font-light grape-nuts-regular">
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
  //   children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

PillNavigation.defaultProps = {
  fluid: false,
};

export default PillNavigation;
