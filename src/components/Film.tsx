import React from "react";
import { Episode, ShowButton, Title } from "./Style";

const Film: React.FunctionComponent<{ title: string }> = ({ title }) => {
  return (
    <Episode>
      <Title>{title}</Title>
      <ShowButton
        src={require("../images/show.svg").default}
        alt="Show"
      ></ShowButton>
    </Episode>
  );
};

export default Film;
