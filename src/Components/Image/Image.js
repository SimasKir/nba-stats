import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import giannisImage from "../../assets/Giannis.jpg";
import nicolaImage from "../../assets/Nicola.jpg";
import shaiImage from "../../assets/Shai.jpeg";
import joelImage from "../../assets/Joel.jpg";
import lucaImage from "../../assets/Luca.jpg";
import tatumImage from "../../assets/Tatum.jpg";

const Image = ({ className, openIndex, ...props }) => {
  const classes = cx(
    "Image-container relative column-width-40 overflow-hidden image-mid max-height-100",
    className,
  );

  const getImage = (openIndex) => {
    switch (openIndex) {
      default:
        return nicolaImage;
      // case 145:
      //   return joelImage;
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
      <img
        className="grayscale"
        src={getImage(openIndex)}
        alt={`Nba player - ${openIndex}`}
      />
      <div className="overlay absolute-mid h-100 w-100"></div>
    </div>
  );
};

Image.propTypes = {
  className: PropTypes.string,
  openIndex: PropTypes.number,
};

Image.defaultProps = {
  src: "../../assets/Nicola.jpg",
};

export default Image;
