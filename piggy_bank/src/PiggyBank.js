import React, { Component, Fragment } from 'react';

class PiggyBank extends Component {

  constructor(props) {
    super(props);
    this.state = {
      total: 0
    }
  }

  render() {
    return (
      <Fragment>
        <h1>{this.props.title}</h1>
        <p>Total: £{this.state.total}</p>
      </Fragment>
    )
  }
}

export default PiggyBank;