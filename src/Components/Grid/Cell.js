import React from 'react';
import PropTypes from 'prop-types';
import { Cell as CellLogic } from '@dracoctix/voltorb-flip';
import { Row } from 'reactstrap';

export default class Cell extends React.Component {
  static propTypes = {
    cell: PropTypes.instanceOf(CellLogic).isRequired,
    onClick: PropTypes.func,
    onMemoSelected: PropTypes.func,
    playing: PropTypes.bool.isRequired,
    memoMode: PropTypes.bool,
    memoSelected: PropTypes.bool,
    cellId: PropTypes.string,
  };

  static defaultProps = {
    onClick: () => {},
    memoMode: false,
    memoSelected: false,
  };

  cellClicked() {
    if (this.props.playing && this.props.cell.covered) {
      if (!this.props.memoSelected && this.props.memoMode) {
        this.props.onMemoSelected(this.props.cell);
      } else if (!this.props.memoMode) {
        this.props.cell.uncover();
        this.forceUpdate();
        this.props.onClick(this.props.cell);
      }
    }
  }

  render() {
    return (
        <div className={`${this.props.memoMode ? `cell-memo-mode ${this.props.memoSelected ? 'cell-memo-selected ' : ''}` : ''}col abstract-cell text-center cell d-flex justify-content-center ${(this.props.cell.covered && this.props.playing) ? 'cell-covered' : 'cell-uncovered'}`} onClick={this.cellClicked.bind(this)}>
          <div className="align-self-center cell-content">
            {this.props.cell.covered ? '❓' : (this.props.cell.mine) ? '💣' : this.props.cell.value }
          </div>
          {!this.props.cell.memo.empty && (<div className="cell-memo-data">
            {this.props.cell.memo.getSortedArray().map((elt, index) => (
              <span className="my-auto" key={`memo-${this.props.cellId}-${index}`}>
                {elt === 0 ? '💣' : elt}
              </span>
            ))}
          </div>)}
        </div>
    )
  }
}
