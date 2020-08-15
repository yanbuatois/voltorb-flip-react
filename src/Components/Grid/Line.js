import React from 'react';
import PropTypes from 'prop-types';
import { Cell as CellLogic } from '@dracoctix/voltorb-flip';
import Indicator from '../Indicators/Indicator.js'
import { Row } from 'reactstrap';
import Cell from './Cell.js';

export default class Line extends React.Component {
  static propTypes = {
    line: PropTypes.arrayOf(PropTypes.instanceOf(CellLogic)).isRequired,
    indicator: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    lineNumber: PropTypes.number.isRequired,
    playing: PropTypes.bool.isRequired,
    memoMode: PropTypes.bool,
    cellForMemo: PropTypes.instanceOf(CellLogic),
    onMemoSelected: PropTypes.func,
  };

  static defaultProps = {
    onClick: () => {},
    onMemoSelected: () => {},
    memoMode: false,
    cellForMemo: null,
  }

  render() {
    return (
      <Row>
        {this.props.line.map((elt, key) => (<Cell cellId={`${this.props.lineNumber}-${key}`} cell={elt} key={`line-${this.props.lineNumber}-${key}`} playing={this.props.playing} onClick={this.props.onClick} memoMode={this.props.memoMode} memoSelected={this.props.cellForMemo === elt} onMemoSelected={this.props.onMemoSelected} />))}
        <Indicator data={this.props.indicator} width={100 / (this.props.line.length + 1)} />
      </Row>
    )
  }
}
