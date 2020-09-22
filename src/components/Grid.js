import React, { Component } from 'react';
import _ from 'lodash';

import Square from './Square';

class Grid extends Component {
  renderSquares() {
    return _.times(9, i => <Square key={i} id={i} />);
  }

  render() {
    return <div className="grid">{this.renderSquares()}</div>;
  }
}

export default Grid;
