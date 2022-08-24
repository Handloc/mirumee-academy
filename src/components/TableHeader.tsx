import React from "react";
import Sort from "../images/sort.svg";

import { Sorting, Label, Cell } from "./Style";

const Header: React.FunctionComponent<{
  label: string;
  key: string;
}> = ({ label, key }) => {
  return (
    <>
      <Cell
        style={{
          marginRight: "0",
          color: label === "Planet Name" ? "#00687f" : "",
        }}
      >
        <Label>{label}</Label>
        <Sorting src={Sort} alt="sort"></Sorting>
      </Cell>
    </>
  );
};

export default Header;
