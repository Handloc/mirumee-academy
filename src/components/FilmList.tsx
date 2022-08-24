import React, { useState } from "react";
import Film from "./Film";

interface FilmProps {
  id: string;
  title: string;
  planetConnection: AssignedPlanets;
}

interface AssignedPlanets {
  planets: PlanetProps[];
}

interface PlanetProps {
  id: string;
  name: string;
  diameter: number;
  rotationPeriod: number;
  orbitalPeriod: number;
  population: number;
  climates: string[];
  surfaceWater: number;
}
const FilmList: React.FunctionComponent<{
  films: FilmProps[];
}> = ({ films }) => {
  return (
    <>
      {films?.map((film) => (
        <Film
          title={film.title}
          planets={film.planetConnection.planets}
          key={film.id}
        ></Film>
      ))}
    </>
  );
};

export default FilmList;
