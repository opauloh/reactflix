import React, { FC } from 'react';

import styles  from "./MovieCard.module.css";

interface Props {
  title: string;
  poster: string;
}

const MovieCard: FC<Props> = ({title, poster}) => (
  <div className={styles.card}>
    <img
      alt={`Poster for movie ${title}`}
      className={styles.image}
      src={`https://image.tmdb.org/t/p/w500/${poster}`}
    />
    <p>{title}</p>
  </div>
)

export default MovieCard;