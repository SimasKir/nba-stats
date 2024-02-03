import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import giannisImage from "../../assets/Giannis.jpg";
import nicolaImage from "../../assets/Nicola.jpg";
import shaiImage from "../../assets/Shai.jpeg";
import joelImage from "../../assets/Joel.jpg";
import lucaImage from "../../assets/Luca.jpg";
import tatumImage from "../../assets/Tatum.jpg";

const Image = ({ children, className, src, openIndex, ...props }) => {
  const classes = cx(
    "relative column-width-40 overflow-hidden flex-mid max-height-100",
    className,
  );

  const getImage = (openIndex) => {
    switch (openIndex) {
      default:
        return joelImage;
      case 145:
        return joelImage;
      case 246:
        return nicolaImage;
      case 175:
        return shaiImage;
      case 15:
        return giannisImage;
      case 132:
        return lucaImage;
      case 434:
        return tatumImage;
    }
  };

  return (
    <div className={classes} {...props}>
      <img className="grayscale" src={getImage(openIndex)} alt={"greet"} />
      <div className="overlay absolute h-100 w-100"></div>
    </div>
  );
};

Image.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  src: PropTypes.string,
};

Image.defaultProps = {
  src: "../../assets/Giannis.jpg",
};

export default Image;
