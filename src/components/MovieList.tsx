import React, { FC } from "react";
import { Movie } from "../api/getMovies";
import MovieCard from "./MovieCard";

import styles from "./MovieList.module.css";

type MoviePreview = Pick<Movie, "id" | "title" | "poster">;

interface Props {
  moviesList?: MoviePreview[];
}

const MovieList: FC<Props> = ({ moviesList }) => {
  if (!moviesList || moviesList.length === 0) return <div>no results</div>;

  return (
    <div className={styles.list}>
      {moviesList.map(({ id, title, poster }) => (
        <MovieCard key={id} id={id} poster={poster} title={title} />
      ))}
    </div>
  );
};

export default MovieList;
