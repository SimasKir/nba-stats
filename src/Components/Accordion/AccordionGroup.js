import React from "react";
import AccordionItem from "./Accordion";
import { store } from "../../redux/store";

const Accordion = ({ handleToggle, openIndex }) => {
  const playersData = store.getState().data.players;
  const statsData = store.getState().data.stats;
  return (
    <div>
      {playersData.map((name, index) => (
        <AccordionItem
          key={index}
          stat={statsData[index]}
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
