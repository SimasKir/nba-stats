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
  handleCompare,
  openIndex,
  setOpenIndex,
  items,
  names,
  ...props
}) => {
  const classes = cx("Content column-width-md-60", className);

  const handleCompareAndSetID = () => {
    handleCompare();
    setOpenIndex(145);
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
      <Accordion
        items={items}
        names={names}
        handleToggle={handleToggle}
        openIndex={openIndex}
      />
      <Button handleCompare={handleCompareAndSetID} className="mt-24">
        Compare Stats
      </Button>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

Content.defaultProps = {
  "section-name": "Content",
};

export default Content;
