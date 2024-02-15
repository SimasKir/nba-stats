import React from "react";
import Text from "../Text/Text";
import downArrow from "../../assets/down-arrow.svg";

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
      {isOpen && (
        <div className="p-10 flex flex-direction-column-row justify-content-center align-left-center border-bottom w-fit-content mx-auto">
          <div className="flex flex-direction-row justify-content-center align-left-center px-12 pt-6">
            <Text
              className="flex align-center base bebas-neue-regular font-light mr-12"
              text={"Points:"}
            />
            <Text
              className="base grape-nuts-regular font-light custom-font-size"
              text={stat.pts}
            />
          </div>
          <div className="flex flex-direction-row justify-content-center align-left-center px-12 pt-6 border-y-x">
            <Text
              className="flex align-center base bebas-neue-regular font-light mr-12"
              text={"Assists:"}
            />
            <Text
              className="base grape-nuts-regular font-light custom-font-size"
              text={stat.ast}
            />
          </div>
          <div className="flex flex-direction-row justify-content-center align-left-center px-12 pt-6">
            <Text
              className="flex align-center base bebas-neue-regular font-light mr-12"
              text={"Rebounds:"}
            />
            <Text
              className="base grape-nuts-regular font-light custom-font-size"
              text={stat.reb}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
