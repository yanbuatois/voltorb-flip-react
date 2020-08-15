import VoltorbFlip from '@dracoctix/voltorb-flip';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Grid from './Grid/Grid.js';
import ScoreRow from './Score/ScoreRow.js';
import ControlRow from './Controls/ControlRow.js';
import MemoRow from './Controls/MemoRow.js';
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
      selectedCellForMemo: null,
      memoMode: false,
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
      this.endedGrid();
    }
  }

  endedGrid() {
    this.forceUpdate();
    this.setState({
      memoMode: false,
      selectedCellForMemo: null,
    })
  }

  gridStopped() {
    this.state.game.grid.interrupt();
    this.endedGrid();
  }

  changeGrid() {

    this.setState({
      grid: this.state.game.gotoNextLevel(),
    });

  }

  memoToggled() {
    const memoMode = !this.state.memoMode;
    const selectedCellForMemo = this.state.memoMode ? this.state.selectedCellForMemo : null;
    this.setState({memoMode, selectedCellForMemo});
  }

  memoValue() {
    this.setState({ selectedCellForMemo: this.state.selectedCellForMemo });
  }

  memoCellSelected(cell) {
    this.setState({
      selectedCellForMemo: cell,
    });
  }

  render() {
    return (
    <Container>
      <Title game={this.state.game} />
      <Grid grid={this.state.grid} memoMode={this.state.memoMode} onMemoSelected={this.memoCellSelected.bind(this)} cellForMemo={this.state.selectedCellForMemo} onCellClick={this.cellClicked.bind(this)}/>
      <ScoreRow game={this.state.game} />
      <ControlRow game={this.state.game} onStop={this.gridStopped.bind(this)} onGridChange={this.changeGrid.bind(this)} />
      <MemoRow selectedCellForMemo={this.state.selectedCellForMemo} game={this.state.game} onMemoValue={this.memoValue.bind(this)} onMemoToggle={this.memoToggled.bind(this)} />
    </Container>
    );
  }
};
