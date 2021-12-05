import { useState } from "react";
import Div, { Li } from "./style";

const Region = ({ region, setRegion }) => {
  const [opened, setOpened] = useState(false);
  return (
    <Div onClick={() => setOpened(!opened)}>
      Filter by Region
      <span>
        <i className="fas fa-chevron-down"></i>
      </span>
      <ul className={`${opened ? "opened" : ""}`}>
        <Li active={region === "" ? true : false} onClick={() => setRegion("")}>
          All
        </Li>
        <Li
          active={region === "asia" ? true : false}
          onClick={() => setRegion("asia")}
        >
          Asia
        </Li>
        <Li
          active={region === "americas" ? true : false}
          onClick={() => setRegion("americas")}
        >
          Americas
        </Li>
        <Li
          active={region === "africa" ? true : false}
          onClick={() => setRegion("africa")}
        >
          Africa
        </Li>
        <Li
          active={region === "europe" ? true : false}
          onClick={() => setRegion("europe")}
        >
          Europe
        </Li>
        <Li
          active={region === "oceania" ? true : false}
          onClick={() => setRegion("oceania")}
        >
          Oceania
        </Li>
      </ul>
    </Div>
  );
};

export default Region;
