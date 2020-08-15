import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Grid as GridLogic, Cell } from '@dracoctix/voltorb-flip';

import LineIndicator from '../Indicators/LineIndicator.js';
import GridInside from './GridInside.js';

export default class Grid extends Component {
  static propTypes = {
    grid: PropTypes.instanceOf(GridLogic).isRequired,
    onCellClick: PropTypes.func,
    memoMode: PropTypes.bool,
    cellForMemo: PropTypes.instanceOf(Cell),
    onMemoSelected: PropTypes.func,
  };

  static defaultProps = {
    onCellClick: () => {},
    memoMode: false,
    cellForMemo: null,
    onMemoSelected: () => {},
  };

  render() {
    return (
      <>
        <LineIndicator grid={this.props.grid} />
        <GridInside grid={this.props.grid} onCellClick={this.props.onCellClick} memoMode={this.props.memoMode} cellForMemo={this.props.cellForMemo} onMemoSelected={this.props.onMemoSelected} />
      </>
    );
  }
};
