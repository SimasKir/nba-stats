import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Text from "../Text/Text";

const Button = ({
  children,
  className,
  src,
  handleCompare,
  onClick,
  ...props
}) => {
  const classes = cx("Button br-8 font-light", className);

  return (
    <div>
      {handleCompare ? (
        <button className={classes} onClick={() => handleCompare()}>
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
  src: PropTypes.string,
};

Button.defaultProps = {
  src: "../../assets/Giannis.jpg",
};

export default Button;
