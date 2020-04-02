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
    <div className="film-list">
      {FilmNodes}
    </div>
  )
}

export default FilmList;