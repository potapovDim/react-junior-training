import React, {Component, PropTypes} from 'react'
import {Provider} from 'react-redux'
import store from '../store/'

class Root extends Component {
  state = {
    show: false,
  }

  hide = ()=> {
    this.setState({show: false})
  }

  render() {
    return (
       <Provider store={store}>
        <div style={{height:'100%'}}>
          ROOT COMPONENT
            <div style={{weight:"80%"}}>
              {this.props.children}
            </div>
          </div>
        </Provider>
    )
  }
}

export default Root