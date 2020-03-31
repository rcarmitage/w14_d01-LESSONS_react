import React from 'react';
import Film from './Film';

const FilmList = ({data}) => {
  const FilmNodes = data.map(film => {
    return (
      <Film title={film.title} key={film.id}>
        {film.title}
      </Film>
    );
  });

  return (
    <div className="film-list">
      {FilmNodes}
    </div>
  )
}

export default FilmList;