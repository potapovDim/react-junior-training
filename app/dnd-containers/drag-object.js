import React, {Component, PropTypes} from 'react'
import Obj from './obj'
import {DragSource} from 'react-dnd'

const objSource = {
  beginDrag(props) {
    const {id, title, left, top} = props
    return {id, title, left, top}
  }
};

const getStyles = (props) => {
  const {left, top, isDragging} = props
  const transform = `translate3d(${left}px, ${top}px, 0)`

  return {
    position: 'absolute',
    transform: transform,
    WebkitTransform: transform,
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : ''
  };
}

@DragSource('OBJ', objSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
}))
export default class DraggableObj extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDragPreview: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired
  }
  state = {
    newTitle: null
  }

  render() {
    const {newTitle} = this.state
    const {title, connectDragSource, id, removeBox, addBloc, left, top, parentId} = this.props
    const buttonRender = title === 'Насосна станція'
    return connectDragSource(
      <div style={getStyles(this.props)} className = "drag-box" >
        <Obj title={title} backgroundColor={'red'}/>
       <div className = "option-menu">
          <div>
            <button className="box-button" onClick={()=>removeBox(id)}>Delete this obj</button>
          </div>
          <div>
            <button className="box-button" onClick={()=>addBloc(id, top, left ,newTitle)}>Add new drag obj</button>
          </div>
          <input className="box-button" placeholder="placeholder"
                 onChange={(e)=>{this.setState({newTitle:e.target.value})}}/>
        </div>
      </div>
    )
  }
}