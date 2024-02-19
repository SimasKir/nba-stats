import React from "react";
import Text from "../Text/Text";
import downArrow from "../../assets/down-arrow.svg";
import Stats from "../Stats/Stats";

const AccordionItem = ({ stat, name, isOpen, onToggle, index }) => {
  return (
    <div className="AccordionItem relative py-12" onClick={onToggle}>
      <div className="absolute-mid w-100 mt-negative-20">
        <Text
          tagStyle="lead"
          className="m-0 grape-nuts-regular text-align-center font-border font-light custom-margin"
        >
          {name.first_name + " " + name.last_name}
        </Text>
      </div>
      <div
        className="box-border br-8"
        style={{
          padding: "10px",
          height: "15px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          className="m-0 bebas-neue-regular font-light"
          text={index + 1 + "."}
        />
        <img
          width={10}
          height={10}
          className={isOpen ? "image-rotated" : ""}
          src={downArrow}
          alt="down-arrow"
        />
      </div>
      {isOpen && <Stats stats={stat} />}
    </div>
  );
};

export default AccordionItem;
