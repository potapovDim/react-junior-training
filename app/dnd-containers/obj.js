import React, {Component, PropTypes} from 'react';

export default class Obj extends Component {
  styles = {
    border: '1px dashed red',
    padding: '0.5rem 1rem',
    cursor: 'move'
  }

  static propTypes = {
    title: PropTypes.string
  }
  render() {
    const {title , backgroundColor} = this.props
    const borderRadius = '25px'
    return (
      <div
        style={{...this.styles,backgroundColor, borderRadius}}>
        {title}
      </div>
    )
  }
}