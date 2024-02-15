import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Button from "../Button/Button";
import PillNavigation from "../PillNavigation/PillNavigation";
import { store } from "../../redux/store";

const Compare = ({
  className,
  handleToggle,
  handleCompare,
  openIndex,
  setOpenIndex,
  items,
  names,
  ...props
}) => {
  const classes = cx("Content column-width-md-60", className);

  const playersData = store.getState().data.players;

  const findPlayerById = (id) => {
    const player = playersData.find((name) => name.id === id);
    return `${player.first_name} ${player.last_name}`;
  };

  return (
    <div
      className={classes}
      style={{ display: "flex", flexDirection: "column" }}
      {...props}
    >
      <PillNavigation
        setOpenIndex={setOpenIndex}
        openIndex={openIndex}
        handleToggle={handleToggle}
        findPlayerById={findPlayerById}
      />
      <Button handleCompare={handleCompare} className="mt-24">
        Back to Race
      </Button>
    </div>
  );
};

Compare.propTypes = {
  className: PropTypes.string,
};

Compare.defaultProps = {
  "section-name": "Compare",
};

export default Compare;
