import React from "react";
import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import { client } from "../graphql/client";
import FilmList from "./FilmList";
import { Background, Logo } from "./Style";
import Loader from "../images/loading.gif";
import LogoImg from "../images/logo.svg";

export const Main: React.FunctionComponent = () => {
  const { data, isFetching } = useFilms();

  return (
    <Background>
      <Logo src={LogoImg} alt="Logo"></Logo>

      {!isFetching ? (
        <FilmList films={data}></FilmList>
      ) : (
        <img src={Loader} alt="loader" style={{ margin: "40px" }} />
      )}
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
    { enabled: true, refetchOnWindowFocus: false }
  );
}
