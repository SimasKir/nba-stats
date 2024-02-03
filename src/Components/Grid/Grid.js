import React, { useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Content from "../Content/Content";
import Image from "../Image/Image";
import Stats from "../../api/statsData";
import Data from "../../api/data";
import Compare from "../Comparison/Compare";

const Grid = ({ children, className, ...props }) => {
  const classes = cx("container grid-align", className);
  const { players } = Data();
  const { stats } = Stats();

  console.log(players);
  console.log(stats);

  const [compareOpen, setCompareOpen] = useState(false);

  let modifiedStatsArray = [];
  stats.forEach((stat) => {
    modifiedStatsArray.push(stat.data[0]);
  });

  const [openIndex, setOpenIndex] = useState(null);

  console.log(openIndex);

  const handleToggle = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const handleCompare = () => {
    setCompareOpen(!compareOpen);
  };

  return (
    <div className={classes} {...props}>
      <Image openIndex={openIndex} />
      {compareOpen ? (
        <Compare
          className="bg-primary"
          items={modifiedStatsArray}
          setOpenIndex={setOpenIndex}
          handleToggle={handleToggle}
          names={players}
          handleCompare={handleCompare}
        />
      ) : (
        <Content
          className="bg-primary"
          handleToggle={handleToggle}
          setOpenIndex={setOpenIndex}
          openIndex={openIndex}
          items={modifiedStatsArray}
          names={players}
          handleCompare={handleCompare}
        />
      )}
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Grid.defaultProps = {
  fluid: false,
};

export default Grid;
