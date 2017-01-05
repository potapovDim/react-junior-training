import React, {Component, PropTypes} from 'react'
import {Provider} from 'react-redux'
import store from '../store/'
import {Link} from 'react-router'

class Root extends Component {

  render() {
    return (
      <Provider store={store}>
        <div style={{
          height: '100%'
        }}>
          ROOT COMPONENT
          <div style={{
            weight: "80%"
          }}>
            {this.props.children}
          </div>
            <Link to="/main">
            <button type='button'>Go to main
            </button>
          </Link>
        </div>
      </Provider>
    )
  }
}

export default Root