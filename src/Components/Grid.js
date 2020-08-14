import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Grid as GridLogic } from '@dracoctix/voltorb-flip';
import { Row } from 'reactstrap';

export default class Grid extends Component {
  static propTypes = {
    grid: PropTypes.instanceOf(GridLogic).isRequired,
  };

  render() {
    return (
      <Row>
      </Row>
    );
  }
};
