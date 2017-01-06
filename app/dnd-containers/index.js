import React, {Component} from 'react'
import DropArea from './container'
import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import {Link} from 'react-router'

@DragDropContext(HTML5Backend)
export default class FullDragArea extends Component {
  render() {
    return (
      <div>
        <DropArea />
      </div>
    )
  }
}
