import React from 'react';
import PropTypes from 'prop-types';

export default class Indicator extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div className={"indication col text-center abstract-cell"}>
        <div className={"indication-top d-flex justify-content-center"}>
          <div className="align-self-center">
            {this.props.data.coefficients}
          </div>
        </div>
        <div className="indication-bottom d-flex justify-content-center">
          <span className="align-self-center">
            {this.props.data.mines}
          </span>
        </div>
      </div>
    );
  }
}
