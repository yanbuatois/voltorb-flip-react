import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Cell } from '@dracoctix/voltorb-flip';

export default class MemoValueButton extends React.Component {
  static propTypes = {
    onMemoValue: PropTypes.func,
    enabled: PropTypes.bool,
    cell: PropTypes.instanceOf(Cell),
  };

  static defaultProps = {
    onMemoValue: () => {},
    enabled: true,
    cell: null,
  };

  buttonClicked() {
    this.props.cell.memo.toggle(this.props.value);
    this.props.onMemoValue(this.props.cell.memo);
  }

  render() {
    console.log(this.props.cell?.memo.has(this.props.value));
    return (
      <Button color="primary" disabled={!this.props.enabled} onClick={this.buttonClicked.bind(this)} active={this.props.enabled && this.props.cell && this.props.cell.memo.has(this.props.value)}>{this.props.children}</Button>
    );
  }
};
