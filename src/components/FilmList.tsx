import React from "react";
import Film from "./Film";

type FilmType = {
  title: string;
};

const FilmList: React.FunctionComponent<{ films: FilmType[] }> = ({
  films,
}) => {
  return (
    <>
      {films?.map((film) => (
        <Film title={film.title}></Film>
      ))}
    </>
  );
};

export default FilmList;
