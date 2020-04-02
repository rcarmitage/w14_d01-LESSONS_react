import React from 'react';
import Film from './Film';

const FilmList = ({data}) => {
  const FilmNodes = data.map(film => {
    return (
      <Film title={film.name} key={film.id}>
        {film.name}
      </Film>
    );
  });

  return (
    <ul className="film-list">
      {FilmNodes}
    </ul>
  )
}

export default FilmList;