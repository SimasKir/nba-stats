import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

const AVAILABLE_JUSTIFY_VALUES = [
  "around",
  "between",
  "start",
  "center",
  "end",
];

const Row = ({ children, className, flex, justify, ...props }) => {
  const classes = cx(
    "row w-100",
    {
      row__flex: flex || justify,
      [`row--justify-${justify}`]: !!justify,
    },
    className,
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  flex: PropTypes.bool,
  justify: PropTypes.oneOf(AVAILABLE_JUSTIFY_VALUES),
};

Row.AVAILABLE_JUSTIFY_VALUES = AVAILABLE_JUSTIFY_VALUES;

Row.defaultProps = {
  flex: false,
};

export default Row;
