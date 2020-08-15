import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Cell } from '@dracoctix/voltorb-flip'

import Line from './Line.js';

export default class GridInside extends React.Component {
  static propTypes = {
    grid: PropTypes.instanceOf(Grid).isRequired,
    onCellClick: PropTypes.func,
    memoMode: PropTypes.bool,
    cellForMemo: PropTypes.instanceOf(Cell),
    onMemoSelected: PropTypes.func,
  };

  static defaultProps = {
    onCellClick: () => {},
    onMemoSelected: () => {},
    memoMode: false,
    cellForMemo: null,
  };

  render() {
    return (
      [...this.props.grid.linesIterator()].map((line, key) => (<Line indicator={this.props.grid.getGroupIndications(line)} playing={this.props.grid.playing} lineNumber={key} onClick={this.props.onCellClick} line={line} key={`line-${key}`} memoMode={this.props.memoMode} cellForMemo={this.props.cellForMemo} onMemoSelected={this.props.onMemoSelected} />))
    );
  }
}
