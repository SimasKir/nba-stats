import React, { useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Text from "../Text/Text";
import Row from "../Row/Row";

function Carousel({ items, className }) {
  const statLinks = [
    { index: 0, stat: "Points" },
    { index: 1, stat: "Assists" },
    { index: 2, stat: "Rebounds" },
  ];
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div className={className}>
      <Row justify="between">
        {statLinks.map((link, index) => (
          <div onClick={() => setActiveSlide(link.index)} key={index}>
            <Text
              tagStyle="base"
              className={cx(
                "bebas-neue-regular font-light py-10",
                activeSlide === link.index
                  ? "font-highlight underline"
                  : "font-light",
              )}
            >
              {link.stat}
            </Text>
          </div>
        ))}
      </Row>
      <Row>{items[activeSlide]}</Row>
    </div>
  );
}

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Carousel;
