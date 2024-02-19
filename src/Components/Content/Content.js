import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Title from "../Title/Title";
import Accordion from "../Accordion/AccordionGroup";
import logo from "../../assets/SVG-nba-logo.svg";
import Button from "../Button/Button";

const Content = ({
  className,
  handleToggle,
  contentSwitch,
  openIndex,
  setOpenIndex,
  ...props
}) => {
  const classes = cx("Content h-100", className);

  const contentSwitchToCompare = () => {
    contentSwitch(1);
    setOpenIndex(246);
  };
  const contentSwitchToSearch = () => {
    contentSwitch(2);
  };

  return (
    <div className={classes} {...props}>
      <Title
        className="bebas-neue-regular lead underline font-light flex flex-direction-row align-center"
        tagStyle="h1"
      >
        <img height="50px" className="mr-12" src={logo} alt="nba logo" />
        MVP Race
      </Title>
      <Accordion handleToggle={handleToggle} openIndex={openIndex} />
      <Button contentSwitch={contentSwitchToCompare} className="mt-24">
        Compare Stats
      </Button>
      <Button contentSwitch={contentSwitchToSearch} className="mt-24">
        Search for player
      </Button>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  handleToggle: PropTypes.func,
  contentSwitch: PropTypes.func,
  openIndex: PropTypes.number,
  setOpenIndex: PropTypes.func,
};

Content.defaultProps = {
  "section-name": "Content",
};

export default Content;
