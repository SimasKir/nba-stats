import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Button from "../Button/Button";
import PillNavigation from "../PillNavigation/PillNavigation";
import Row from "../Row/Row";

const Compare = ({
  className,
  handleToggle,
  contentSwitch,
  openIndex,
  setOpenIndex,
  ...props
}) => {
  const classes = cx("Compare h-100", className);

  const compareSwitchToContent = () => {
    contentSwitch(0);
  };
  const compareSwitchToSearch = () => {
    contentSwitch(2);
  };

  return (
    <div
      className={cx("flex-column align-center justify-content-center", classes)}
      {...props}
    >
      <PillNavigation
        className="pt-md-24"
        setOpenIndex={setOpenIndex}
        openIndex={openIndex}
        handleToggle={handleToggle}
      />
      <Row justify="center" className="h-auto pb-md-24 bg-primary">
        <div className="flex flex-row">
          <Button
            contentSwitch={compareSwitchToContent}
            className="mt-24 mx-12"
          >
            Back to Race
          </Button>
          <Button contentSwitch={compareSwitchToSearch} className="mt-24 mx-12">
            Search for player
          </Button>
        </div>
      </Row>
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
