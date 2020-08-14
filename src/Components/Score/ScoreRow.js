import React from 'react';
import PropTypes from 'prop-types';
import Game from '@dracoctix/voltorb-flip';
import {Row, Col} from 'reactstrap';

export default class ScoreRow extends React.Component {
  static propTypes = {
    game: PropTypes.instanceOf(Game).isRequired,
  };

  render() {
    return (
      <Row className={"score-row"}>
        <Col className="text-center">Score for the game: <strong>{this.props.game.score} pts</strong></Col>
        <Col className="text-center">Score for the grid: <strong>{this.props.game.grid.score} pts</strong></Col>
      </Row>
    )
  }
}
