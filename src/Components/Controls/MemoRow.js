import React from 'react';
import { ButtonGroup, Row, Button } from 'reactstrap';
import Game, { Cell } from '@dracoctix/voltorb-flip';
import PropTypes from 'prop-types';
import _ from 'lodash';
import MemoValueButton from './MemoValueButton.js'

export default class MemoRow extends React.Component {
  static propTypes = {
    game: PropTypes.instanceOf(Game).isRequired,
    selectedCellForMemo: PropTypes.instanceOf(Cell),
    onMemoToggle: PropTypes.func,
    onMemoValue: PropTypes.func,
  }

  static defaultProps = {
    selectedCellForMemo: null,
    onMemoToggle: () => {},
    onMemoValue: () => {},
  };

  constructor(...props) {
    super(...props);

    this.state = {
      memoEnabled: false,
    };
  }

  toggleMemo() {
    const memoEnabled = !this.state.memoEnabled;
    this.setState({
      memoEnabled
    });
    this.props.onMemoToggle(memoEnabled);
  }

  render() {
    return (
      <Row className="mt-3">
        <ButtonGroup className="col-10">
          {_.times(this.props.game.maximalCoefficient + 1, (index) => (<MemoValueButton enabled={!!(this.props.game.grid.playing && this.state.memoEnabled && this.props.selectedCellForMemo)} value={index} cell={this.props.selectedCellForMemo} key={`memo-btn-${index}`} onMemoValue={this.props.onMemoValue}>{index === 0 ? '💣' : index}</MemoValueButton>))}
        </ButtonGroup>
        <ButtonGroup className="col-2">
          <Button color="primary" disabled={!this.props.game.grid.playing} active={this.state.memoEnabled} onClick={this.toggleMemo.bind(this)}>
            <span role="img" aria-label="Mémo">📝</span>
          </Button>
        </ButtonGroup>
      </Row>
    )
  }
};
