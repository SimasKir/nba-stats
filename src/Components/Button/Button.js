import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Text from "../Text/Text";

const Button = ({ children, className, src, handleCompare, ...props }) => {
  const classes = cx("Button br-8 font-light", className);

  return (
    <button className={classes} onClick={() => handleCompare()}>
      <Text className="bebas-neue-regular">{children}</Text>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  src: PropTypes.string,
};

Button.defaultProps = {
  src: "../../assets/Giannis.jpg",
};

export default Button;
