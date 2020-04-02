import React from 'react';

const Film = ({title, url}) => (
  <li className="film">
    <a href={url}>{title}</a>
  </li>
);

export default Film;