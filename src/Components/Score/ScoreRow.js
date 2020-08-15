import React from 'react';
import PropTypes from 'prop-types';
import Game from '@dracoctix/voltorb-flip';
import {Row, Col} from 'reactstrap';

export default class ScoreRow extends React.Component {
  static propTypes = {
    game: PropTypes.instanceOf(Game).isRequired,
  };

  numberFormat = new Intl.NumberFormat();

  render() {
    return (
      <Row className={"score-row"}>
        <Col className="text-center">Score for the game: <strong>{this.numberFormat.format(this.props.game.score)} points</strong></Col>
        <Col className="text-center">Score for the grid: <strong>{this.numberFormat.format(this.props.game.grid.score)} points</strong></Col>
      </Row>
    )
  }
}
