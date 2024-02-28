import React from "react";
import PropTypes from "prop-types";

import Button from "../Button/Button";
import Form from "../Form/Form";
import Row from "../Row/Row";

const Search = ({ contentSwitch, setOpenIndex }) => {
  const searchSwitchToContent = () => {
    contentSwitch(0);
  };

  const searchSwitchToCompare = () => {
    contentSwitch(1);
    setOpenIndex(246);
  };
  return (
    <div className="flex-column h-100 justify-content-center align-center bg-primary">
      <Form />
      <Row justify="center" className="pb-md-24">
        <div className="flex flex-row">
          <Button contentSwitch={searchSwitchToContent} className="mt-24 mx-12">
            Back to race
          </Button>
          <Button contentSwitch={searchSwitchToCompare} className="mt-24 mx-12">
            Compare
          </Button>
        </div>
      </Row>
    </div>
  );
};

Search.propTypes = {
  contentSwitch: PropTypes.func,
  setOpenIndex: PropTypes.func,
};

Search.defaultProps = {
  "section-name": "Search",
};

export default Search;
