import React from 'react';
import PropTypes from 'prop-types';
import Game from '@dracoctix/voltorb-flip';
import { Row } from 'reactstrap';

export default class Title extends React.Component {
  static propTypes = {
    game: PropTypes.instanceOf(Game).isRequired,
  }

  render() {
    return (
      <Row>
        <h1 className={"col text-center"}>Voltorb Flip (Level {this.props.game.level})</h1>
      </Row>);
  }
}
