import React from "react";
import Text from "../Text/Text";
import downArrow from "../../assets/down-arrow.svg";

const AccordionItem = ({ item, name, isOpen, onToggle, index }) => {
  console.log(item);
  return (
    <div className="relative py-12" onClick={onToggle}>
      <div className="absolute w-100 mt-negative-20">
        <Text className="m-0 lead grape-nuts-regular text-align-center font-border font-light">
          {name.first_name + " " + name.last_name}
        </Text>
      </div>
      <div
        className="box-border br-8"
        style={{
          padding: "10px",
          minWidth: "600px",
          minHeight: "15px",
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
          className={isOpen && "image-rotated"}
          src={downArrow}
          alt="down-arrow"
        />
      </div>
      {isOpen && (
        <div className="p-10 flex-row border-bottom">
          <div className="flex flex-row px-12">
            <Text
              className="big bebas-neue-regular font-light mr-12"
              text={"Points:"}
            />
            <Text
              className="big grape-nuts-regular font-light custom-font-size"
              text={item.pts}
            />
          </div>
          <div className="flex flex-row px-12 border-x">
            <Text
              className="big bebas-neue-regular font-light mr-12"
              text={"Assists:"}
            />
            <Text
              className="big grape-nuts-regular font-light custom-font-size"
              text={item.ast}
            />
          </div>
          <div className="flex flex-row px-12">
            <Text
              className="big bebas-neue-regular font-light mr-12"
              text={"Rebounds:"}
            />
            <Text
              className="big grape-nuts-regular font-light custom-font-size"
              text={item.reb}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
