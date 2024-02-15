import React, { useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Content from "../Content/Content";
import Image from "../Image/Image";
import Stats from "../../api/statsData";
import Data from "../../api/data";
import Compare from "../Comparison/Compare";
import { store } from "../../redux/store";
import { set } from "../../redux/actions";

const Grid = ({ className, ...props }) => {
  const classes = cx("container grid-align", className);

  const [compareOpen, setCompareOpen] = useState(false);

  const { players } = Data();
  const { stats } = Stats();

  store.dispatch(set({ players: players, stats: stats }));

  console.log(store.getState());

  const [openIndex, setOpenIndex] = useState(null);

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
          // items={stats}
          setOpenIndex={setOpenIndex}
          openIndex={openIndex}
          handleToggle={handleToggle}
          // names={players}
          handleCompare={handleCompare}
        />
      ) : (
        <Content
          className="bg-primary"
          handleToggle={handleToggle}
          setOpenIndex={setOpenIndex}
          openIndex={openIndex}
          // items={stats}
          // names={players}
          handleCompare={handleCompare}
        />
      )}
    </div>
  );
};

Grid.propTypes = {
  className: PropTypes.string,
};

Grid.defaultProps = {
  "section-name": "Grid",
};

export default Grid;
