import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Button from "../Button/Button";
import PillNavigation from "../PillNavigation/PillNavigation";

const Compare = ({
  children,
  className,
  handleToggle,
  handleCompare,
  openIndex,
  setOpenIndex,
  items,
  names,
  ...props
}) => {
  const classes = cx("Content column-width-60", className);

  const assistsArray = items.map(({ player_id, ast }) => ({
    player_id,
    ast,
  }));
  const pointsArray = items.map(({ player_id, pts }) => ({
    player_id,
    pts,
  }));
  const reboundsArray = items.map(({ player_id, reb }) => ({
    player_id,
    reb,
  }));
  const sortedAssistsArray = assistsArray.sort((a, b) => b.ast - a.ast);
  const sortedPointsArray = pointsArray.sort((a, b) => b.pts - a.pts);
  const sortedReboundsArray = reboundsArray.sort((a, b) => b.reb - a.reb);

  const findPlayerById = (id) => {
    const player = names.find((name) => name.id === id);
    return `${player.first_name} ${player.last_name}`;
  };

  return (
    <div
      className={classes}
      names={names}
      items={items}
      style={{ display: "flex", flexDirection: "column" }}
      {...props}
    >
      <PillNavigation
        setOpenIndex={setOpenIndex}
        handleToggle={handleToggle}
        findPlayerById={findPlayerById}
        points={sortedPointsArray}
        assists={sortedAssistsArray}
        rebounds={sortedReboundsArray}
      />
      <Button handleCompare={handleCompare} className="mt-24">
        Back to Race
      </Button>
    </div>
  );
};

Compare.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Compare.defaultProps = {
  fluid: false,
};

export default Compare;
