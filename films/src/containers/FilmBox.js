import React, { Component } from 'react';

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
    }
  }

  render() {
    return (
      <div>
        <h2>Films</h2>
      </div>
    )
  }
}

export default FilmBox;