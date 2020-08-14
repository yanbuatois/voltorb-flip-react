import VoltorbFlip from '@dracoctix/voltorb-flip';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Grid from './Grid.js';

export default class Game extends Component {
  static propTypes = {
    game: PropTypes.instanceOf(VoltorbFlip),
  };

  static defaultProps = {
    game: new VoltorbFlip(),
  };

  constructor(...args) {
    super(...args);
    this.updateGridState();
  }

  updateGridState() {
    this.setState({
      grid: this.props.game.grid
    });
  }

  render() {
    return (<Grid grid={this.state.grid}/>);
  }
};
