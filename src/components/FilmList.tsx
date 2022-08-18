import React from "react";
import Film from "./Film";

interface FilmTypes {
  id: string;
  title: string;
  planetConnection: PlanetsArray;
}

interface PlanetsArray {
  planets: Array<PlanetTypes>;
}

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

const FilmList: React.FunctionComponent<{
  films: FilmTypes[];
}> = ({ films }) => {
  return (
    <>
      {films?.map((film) => (
        <Film title={film.title} planets={film.planetConnection.planets}></Film>
      ))}
    </>
  );
};

export default FilmList;
