import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@dracoctix/voltorb-flip';
import { Row } from 'reactstrap';

import Indicator from './Indicator.js';

export default class LineIndicator extends React.Component {
  static propTypes = {
    grid: PropTypes.instanceOf(Grid).isRequired,
  };

  render() {
    return (
      <Row>
        {[...this.props.grid.columnsIterator()].map(column => (
          (<Indicator data={this.props.grid.getGroupIndications(column)} width={100 / (this.props.grid.width + 1)}  />)
        ))}
      </Row>
    );
  }
};
