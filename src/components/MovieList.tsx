import React, { FC } from 'react';
import MovieCard from './MovieCard';

interface Movie {
  title: string;
  poster: string;
}

interface Props {
  moviesList: Movie[];
}

const MovieList : FC<Props> = ({moviesList}) => {
  if (moviesList.length === 0) return <div>no results</div>
  
  return (
  <div>
    {
      moviesList.map(movie => (
         <MovieCard poster={movie.poster} title={movie.title} />
      ))
    }
  </div>
  )
}

export default MovieList;