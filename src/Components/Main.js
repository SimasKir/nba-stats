import React, { useState } from "react";
import Page from "../Components/Page/Page";
import Section from "../Components/Section/Section";
import Row from "../Components/Row/Row";
import Col from "../Components/Col/Col";
import { store } from "../redux/store";

import Content from "./Content/Content";
import Search from "./Search/Search";
import Image from "./Image/Image";
import FetchPlayersStats from "../api/fetchPlayersStats";
import FetchPlayersData from "../api/FetchPlayersData";
import Compare from "./Comparison/Compare";
import { set } from "../redux/actions";

const Main = () => {
  const [contentIndex, setContentIndex] = useState(0);

  const { players } = FetchPlayersData();
  const { stats } = FetchPlayersStats();

  store.dispatch(set({ players: players, stats: stats, newPlayer: null }));

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const contentSwitch = (index) => {
    setContentIndex(index);
  };

  return (
    <Page>
      <Section className="vh-100">
        <Row flex className="h-100">
          <Col width={contentIndex === 2 ? 0 : 40}>
            <Image openIndex={openIndex} />
          </Col>
          <Col width={contentIndex === 2 ? 100 : 60}>
            {contentIndex === 0 && (
              <Content
                className="bg-primary"
                handleToggle={handleToggle}
                setOpenIndex={setOpenIndex}
                openIndex={openIndex}
                contentSwitch={contentSwitch}
              />
            )}
            {contentIndex === 1 && (
              <Compare
                className="bg-primary"
                setOpenIndex={setOpenIndex}
                openIndex={openIndex}
                handleToggle={handleToggle}
                contentSwitch={contentSwitch}
              />
            )}
            {contentIndex === 2 && (
              <Search
                className="bg-primary"
                setOpenIndex={setOpenIndex}
                openIndex={openIndex}
                handleToggle={handleToggle}
                contentSwitch={contentSwitch}
              />
            )}
          </Col>
        </Row>
      </Section>
    </Page>
  );
};

export default Main;
