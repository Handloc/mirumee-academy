import React from "react";
import { Episode, ShowButton, Title, PlanetRow, Details } from "./Style";

interface PlanetTypes {
  id: string;
  name: string;
  diameter: number;
  rotationPeriod: number;
  orbitalPeriod: number;
  population: number;
  climates: string | string[];
  surfaceWater: number;
}

const Film: React.FunctionComponent<{
  title: string;
  planets: PlanetTypes[];
}> = ({ title, planets }) => {
  return (
    <>
      <Episode>
        <Title>{title}</Title>
        <ShowButton
          src={require("../images/show.svg").default}
          alt="Show"
        ></ShowButton>
      </Episode>
      <Details>
        <PlanetRow>
          {planets?.map((planet) => (
            <p>{planet.name}</p>
          ))}
        </PlanetRow>
      </Details>
    </>
  );
};

export default Film;
