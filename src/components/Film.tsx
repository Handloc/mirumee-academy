import React from "react";
import Show from "../images/show.svg";
import Header from "./TableHeader";

import {
  Episode,
  Title,
  PlanetRow,
  Details,
  Columns,
  Line,
  Cell,
  Button,
} from "./Style";

interface PlanetProps {
  id: string;
  name: string;
  diameter: number;
  rotationPeriod: number;
  orbitalPeriod: number;
  population: number;
  climates: String[];
  surfaceWater: number;
}

const Film: React.FunctionComponent<{
  title: string;
  planets: PlanetProps[];
  isOpen?: boolean;
}> = ({ title, planets, isOpen = false }) => {
  const [open, setOpen] = React.useState(isOpen);

  return (
    <>
      <Episode onClick={() => setOpen(!open)} active={open}>
        <Title>{title}</Title>
        <Button src={Show} alt="Show" active={open}></Button>
      </Episode>
      <Details active={open}>
        <Columns>
          <Header label={"Planet Name"} key={"name"}></Header>
          <Header label={"Rotation period"} key={"rotationPeriod"}></Header>
          <Header label={"Orbital period"} key={"orbitalPeriod"}></Header>
          <Header label={"Diameter"} key={"diameter"}></Header>
          <Header label={"Climate"} key={"climates"}></Header>
          <Header label={"Surface water"} key={"surfaceWater"}></Header>
          <Header label={"Population"} key={"population"}></Header>
        </Columns>
        <Line></Line>
        {planets?.map((planet) => (
          <PlanetRow key={planet.id}>
            <Cell style={{ color: "#00687f", justifyContent: "left" }}>
              {planet.name}
            </Cell>
            <Cell>{planet.rotationPeriod}</Cell>
            <Cell>{planet.orbitalPeriod}</Cell>
            <Cell>{planet.diameter}</Cell>
            <Cell
              style={{
                flexDirection: "column",
              }}
            >
              {planet.climates.length > 1
                ? planet?.climates.map((climate: any) => <Cell>{climate}</Cell>)
                : planet.climates}
            </Cell>
            <Cell>{planet.surfaceWater ? planet.surfaceWater : "unknown"}</Cell>
            <Cell>{planet.population ? planet.population : "unknown"}</Cell>
          </PlanetRow>
        ))}
      </Details>
    </>
  );
};

export default Film;
