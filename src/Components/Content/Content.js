import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Title from "../Title/Title";
import Accordion from "../Accordion/AccordionGroup";
import logo from "../../assets/SVG-nba-logo.svg";
import Button from "../Button/Button";

const Content = ({
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

  const handleCompareAndSetID = () => {
    handleCompare();
    setOpenIndex(145);
  };

  return (
    <div className={classes} {...props}>
      <Title
        className="bebas-neue-regular lead underline font-light flex-row"
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
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Content.defaultProps = {
  fluid: false,
};

export default Content;
