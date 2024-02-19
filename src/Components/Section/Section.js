import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const Section = ({ background, children, className, ...props }) => {
  return (
    <section className={cx("Section", background, className)} {...props}>
      {children}
    </section>
  );
};

Section.propTypes = {
  background: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Section.defaultProps = {
  "section-name": "Hero",
  background: "bg-primary",
};

export default Section;
