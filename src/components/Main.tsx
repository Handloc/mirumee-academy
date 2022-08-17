import React from "react";
import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import { client } from "../graphql/client";
import FilmList from "./FilmList";
import { Background, Logo } from "./Style";

export const Main: React.FunctionComponent = () => {
  const { data } = useFilms();

  return (
    <Background>
      <Logo src={require("../images/logo.svg").default} alt="Logo"></Logo>
      <FilmList films={data}></FilmList>
    </Background>
  );
};

function useFilms() {
  return useQuery(
    ["getFilms"],
    async () => {
      const data = await client.request(
        gql`
          query {
            allFilms {
              films {
                id
                title
                planetConnection {
                  planets {
                    id
                    name
                    rotationPeriod
                    orbitalPeriod
                    diameter
                    climates
                    surfaceWater
                    population
                  }
                }
              }
            }
          }
        `
      );
      return data.allFilms.films;
    },
    { enabled: true }
  );
}
