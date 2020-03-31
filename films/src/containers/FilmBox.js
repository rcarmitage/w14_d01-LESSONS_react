import React, { Component } from 'react';
import FilmList from '../components/FilmList';

class FilmBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          title: "Film 01"
        },
        {
          id: 2,
          title: "Film 02"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h2>Films</h2>
        <FilmList data={this.state.data} />
      </div>
    );
  }
}

export default FilmBox;