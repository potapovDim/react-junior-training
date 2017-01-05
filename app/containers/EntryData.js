import React, {Component} from 'react'
import {connect} from 'react-redux'


class EnterDataComponent extends Component {
  state = {
    show: false,
  }

  hide = ()=> {
    this.setState({show: false})
  }

  render() {
    return (
      <div>
        <div style={{height:'100%'}}>
        ENTER DATA COMPONENT
            <div style={{weight:"80%"}}>
              {this.props.children}
            </div>
          </div>
      </div>
    )
  }
}
export default connect()(EnterDataComponent)