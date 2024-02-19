import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

const Page = ({ children, className, ...props }) => {
  return (
    <main {...props} className={cx("Page d-flex flex-column", className)}>
      {children}
    </main>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Page;
