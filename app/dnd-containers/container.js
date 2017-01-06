import React, {Component, PropTypes} from 'react'
import update from 'react/lib/update'
import DraggObject from './drag-object'
import {DropTarget} from 'react-dnd'
import _ from 'lodash'
import uuid from 'node-uuid'

const styles = {
  width: 10000,
  height: 800,
  border: '1px solid black',
  position: 'relative'
};

const boxTarget = {
  drop(props, monitor, component) {
    const delta = monitor.getDifferenceFromInitialOffset()
    const item = monitor.getItem()

    let left = Math.round(item.left + delta.x);
    let top = Math.round(item.top + delta.y);
    component.moveBox(item.id, left, top);
  }
}

@DropTarget('OBJ', boxTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))
export default class DropArea extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
  }


  state = {
    boxes: {
      'a': {top: 10, left: 50, title: 'OBJ A'},
      'b': {top: 80, left: 50, title: 'OBJ B', parentId: 'a'}
    }
  }


  moveBox(id, left, top) {
    this.setState(update(this.state, {
      boxes: {
        [id]: {
          $merge: {
            left: left,
            top: top
          }
        }
      }
    }))
  }

  addBox = (parentId, top, left, newBoxTitle) => {
    const id = uuid.v1()
    const _state = this.state
    _state.boxes[id] = {top: top + 5, left: left + 5, title: newBoxTitle, parentId}
    this.setState(_state)
  }

  removeBox = (id) => {
    const boxes = this.state.boxes
    const newBox = _.omit(boxes, [id])
    this.setState({boxes: newBox})
  }



  renderBox(item, key) {
    return (
      <DraggObject
        {...item}
        key={key}
        id={key}
        removeBox={this.removeBox}
        addBloc={this.addBox}/>
    );
  }


  render() {
    const {connectDropTarget} = this.props
    const {boxes} = this.state;
    return connectDropTarget(
      <div style={styles} >
        {Object
          .keys(boxes)
          .map(key => this.renderBox(boxes[key], key))
        }
      </div>
    );
  }
}