import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const TEXT_TAGS = ["p", "span", "div"];
const TEXT_SIZES = ["lead", "big", "small", "base"];

const Text = ({ text, tag, tagStyle, children, className }) => {
  const TextTag = TEXT_TAGS.includes(tag) ? tag : "p";
  const tagStyleClass = TEXT_SIZES.includes(tagStyle) ? tagStyle : "";
  const textClass = cx("Text m-0", tagStyleClass, className);

  return <TextTag className={textClass}>{children || text}</TextTag>;
};

Text.propTypes = {
  text: PropTypes.node,
  tag: PropTypes.oneOf(TEXT_TAGS),
  tagStyle: PropTypes.oneOf(TEXT_SIZES),
  children: PropTypes.node,
  className: PropTypes.string,
};

Text.defaultProps = {
  tag: "p",
  tagStyle: "base",
};

export default Text;
