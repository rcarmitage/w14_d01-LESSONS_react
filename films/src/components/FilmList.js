import React from 'react';

const FilmList = ({data}) => {
  const FilmNodes = data.map(film => {
    return (
      <Film title={film.title} key={film.id}>
        {film.title}
      </Film>
    );
  });

  return (
    <div>
      {FilmNodes}
    </div>
  )
}
