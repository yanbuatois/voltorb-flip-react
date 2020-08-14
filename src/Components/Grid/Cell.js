import React from 'react';
import PropTypes from 'prop-types';
import { Cell as CellLogic } from '@dracoctix/voltorb-flip';

export default class Cell extends React.Component {
  static propTypes = {
    cell: PropTypes.instanceOf(CellLogic).isRequired,
    onClick: PropTypes.func,
    playing: PropTypes.bool,
  };

  static defaultProps = {
    onClick: () => {},
  };

  cellClicked() {
    if (this.props.playing) {
      this.props.cell.uncover();
      this.forceUpdate();
      this.props.onClick(this.props.cell);
    }
  }

  render() {
    return (
      <div className={`col abstract-cell text-center cell d-flex justify-content-center ${(this.props.cell.covered && this.props.playing) ? 'cell-covered' : 'cell-uncovered'}`} onClick={this.cellClicked.bind(this)}>
        <div className="align-self-center cell-content">
          {this.props.cell.covered ? '❓' : (this.props.cell.mine) ? '💣' : this.props.cell.value }
        </div>
      </div>
    )
  }
}
