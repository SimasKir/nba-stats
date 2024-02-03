import React from "react";
import AccordionItem from "./Accordion";

const Accordion = ({ items, names, handleToggle, openIndex }) => {
  return (
    <div>
      {names.map((name, index) => (
        <AccordionItem
          key={index}
          item={items[index]}
          name={name}
          index={index}
          isOpen={openIndex === name.id}
          onToggle={() => handleToggle(name.id)}
        />
      ))}
    </div>
  );
};

export default Accordion;
