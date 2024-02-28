import React from "react";
import Text from "../Text/Text";
import findPlayerById from "../../functions/findPlayerById";

const List = ({ item, players, stat, index }) => {
  return (
    <div className="flex flex-direction-row justify-between mb-12 border-bottom py-12">
      <div className="flex flex-direction-row">
        <Text
          tagStyle="base"
          className="m-0 bebas-neue-regular font-light mr-12"
          text={index + 1 + "."}
        />
        <Text
          tagStyle="base"
          className="font-light bebas-neue-regular mr-12"
          text={findPlayerById(item.player_id, players)}
        />
      </div>
      <Text tagStyle="base" className="font-light grape-nuts-regular">
        {stat === "ast" && item.ast}
        {stat === "pts" && item.pts}
        {stat === "reb" && item.reb}
      </Text>
    </div>
  );
};

export default List;
