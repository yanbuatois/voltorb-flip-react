import React from 'react';
import { Button, Row, ButtonGroup } from 'reactstrap';
import PropTypes from 'prop-types';
import Game from '@dracoctix/voltorb-flip';

export default class ControlRow extends React.Component {
  static propTypes = {
    onStop: PropTypes.func,
    onGridChange: PropTypes.func,
    game: PropTypes.instanceOf(Game).isRequired,
  };

  static defaultProps = {
    onStop: () => {},
    onGridChange: () => {},
  };

  render() {
    return (
      <Row>
        <ButtonGroup className="col-12">
          <Button color={this.props.game.grid.playing ? 'danger' : (this.props.game.grid.won ? 'success' : 'danger')} className="col-6" onClick={this.props.onStop} disabled={!this.props.game.grid.playing}>{this.props.game.grid.playing ? 'Stop the grid here to keep points.' : (this.props.game.grid.won ? 'You found all points of the grid.' : (this.props.game.grid.lost ? `You found a mine and will return to level ${this.props.game.nextLevel}` : `You interrupted the grid, you will start over from the same level.`))}</Button>
          <Button color="success" onClick={this.props.onGridChange} disabled={this.props.game.grid.playing} className="col-6">{this.props.game.grid.playing ? 'Game in progress...' : `Go to next grid (level ${this.props.game.nextLevel})${this.props.game.grid.score ? ' and earn points' : ''}.`}</Button>
        </ButtonGroup>
      </Row>
    );
  }
}
