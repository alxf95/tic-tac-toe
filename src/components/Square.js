import React, { Component } from 'react';

class Square extends Component {
  constructor() {
    super();
    this.state = { active: false };
  }

  renderClick = () => {
    this.setState({ active: true });
    console.log(this.state);
  };

  render() {
    return <div onClick={this.renderClick} className="square"></div>;
  }
}

export default Square;
