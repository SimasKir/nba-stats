import React from "react";
import PropTypes from "prop-types";
import Text from "../Text/Text";

const Stats = ({ stats }) => {
  return (
    <div className="p-10 flex flex-direction-column-row justify-content-center align-left-center border-bottom w-fit-content mx-auto">
      <div className="flex flex-direction-row justify-content-center align-left-center px-12 pt-6">
        <Text
          className="flex align-center base bebas-neue-regular font-light mr-12"
          text={"Points:"}
        />
        <Text
          className="base grape-nuts-regular font-light custom-font-size"
          text={stats.pts}
        />
      </div>
      <div className="flex flex-direction-row justify-content-center align-left-center px-12 pt-6 border-y-x">
        <Text
          className="flex align-center base bebas-neue-regular font-light mr-12"
          text={"Assists:"}
        />
        <Text
          className="base grape-nuts-regular font-light custom-font-size"
          text={stats.ast}
        />
      </div>
      <div className="flex flex-direction-row justify-content-center align-left-center px-12 pt-6">
        <Text
          className="flex align-center base bebas-neue-regular font-light mr-12"
          text={"Rebounds:"}
        />
        <Text
          className="base grape-nuts-regular font-light custom-font-size"
          text={stats.reb}
        />
      </div>
    </div>
  );
};

Stats.propTypes = {
  stat: PropTypes.object,
};

Stats.defaultProps = {
  stat: {
    pts: 20,
    ast: 20,
    reb: 20,
  },
};

export default Stats;
