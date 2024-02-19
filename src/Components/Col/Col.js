import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const COLUMN_SIZES = [0, 40, 60, 100];

const Col = ({ children, className, width, ...props }) => {
  return (
    <div className={cx("col", `h-100 col-${width}`, className)} {...props}>
      {children}
    </div>
  );
};

Col.propTypes = {
  width: PropTypes.oneOf(COLUMN_SIZES),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Col.defaultProps = {
  width: 100,
};

export default Col;
