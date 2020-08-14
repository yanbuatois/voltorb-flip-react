import React from 'react';
import PropTypes from 'prop-types';

export default class Indicator extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    width: PropTypes.number.isRequired,
  }

  render() {
    return (
      <span className={"indication"} style={{
        width: `${this.props.width}%`,
      }}>
        <span className={"indication-top"}>{this.props.data.coefficients}</span>
        <span className="indication-bottom">{this.props.data.mines}</span>
      </span>
    );
  }
}
