import VoltorbFlip from '@dracoctix/voltorb-flip';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Grid from './Grid/Grid.js';
import ScoreRow from './Score/ScoreRow.js';
import ControlRow from './Controls/ControlRow.js';
import Title from './Title';

export default class Game extends Component {
  static propTypes = {
    game: PropTypes.instanceOf(VoltorbFlip),
  };

  static defaultProps = {
    game: new VoltorbFlip(),
  };

  constructor(...args) {
    super(...args);
    this.state = {
      grid: this.props.game.grid,
      game: this.props.game,
    };
  }

  updateGridState() {
    this.setState({
      grid: this.props.game.grid
    });
  }

  cellClicked(cell) {
    this.setState({
      game: this.props.game,
    });
    if (!this.state.grid.playing) {
      this.forceUpdate();
    }
  }

  gridStopped() {
    this.state.game.grid.interrupt();
    this.forceUpdate();
  }

  changeGrid() {

    this.setState({
      grid: this.state.game.gotoNextLevel(),
    });

  }

  render() {
    return (
    <Container>
      <Title game={this.state.game} />
      <Grid grid={this.state.grid} onCellClick={this.cellClicked.bind(this)}/>
      <ScoreRow game={this.state.game} />
      <ControlRow game={this.state.game} onStop={this.gridStopped.bind(this)} onGridChange={this.changeGrid.bind(this)} />
    </Container>
    );
  }
};
