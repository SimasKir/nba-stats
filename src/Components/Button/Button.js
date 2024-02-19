import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Text from "../Text/Text";

const Button = ({ children, className, contentSwitch, onClick }) => {
  const classes = cx("Button br-8 font-light", className);

  return (
    <div>
      {contentSwitch ? (
        <button className={classes} onClick={() => contentSwitch(1)}>
          <Text className="bebas-neue-regular">{children}</Text>
        </button>
      ) : (
        <button className={classes} onClick={onClick}>
          <Text className="bebas-neue-regular">{children}</Text>
        </button>
      )}
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  contentSwitch: PropTypes.func,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  src: "../../assets/Giannis.jpg",
};

export default Button;
