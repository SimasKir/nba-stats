import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Button from "../Button/Button";
import PillNavigation from "../PillNavigation/PillNavigation";
import { store } from "../../redux/store";

const Compare = ({
  className,
  handleToggle,
  contentSwitch,
  openIndex,
  setOpenIndex,
  ...props
}) => {
  const classes = cx("Content h-100", className);

  const playersData = store.getState().data.players;

  const findPlayerById = (id) => {
    const player = playersData.find((name) => name.id === id);
    return `${player.first_name} ${player.last_name}`;
  };

  const compareSwitchToContent = () => {
    contentSwitch(0);
  };
  const compareSwitchToSearch = () => {
    contentSwitch(2);
  };

  return (
    <div className={cx("flex-column", classes)} {...props}>
      <PillNavigation
        setOpenIndex={setOpenIndex}
        openIndex={openIndex}
        handleToggle={handleToggle}
        findPlayerById={findPlayerById}
      />
      <Button contentSwitch={compareSwitchToContent} className="mt-24">
        Back to Race
      </Button>
      <Button contentSwitch={compareSwitchToSearch} className="mt-24">
        Search for player
      </Button>
    </div>
  );
};

Compare.propTypes = {
  className: PropTypes.string,
  handleToggle: PropTypes.func,
  contentSwitch: PropTypes.func,
  openIndex: PropTypes.number,
  setOpenIndex: PropTypes.func,
};

Compare.defaultProps = {
  "section-name": "Compare",
};

export default Compare;
