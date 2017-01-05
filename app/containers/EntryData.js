import React, {Component} from 'react'
import {connect} from 'react-redux'
import {enterName} from '../reducers/data/index'
import {Link} from 'react-router'

class EnterDataComponent extends Component {

  changeUserName = event => {
    const name =  event.target.value
    this
      .props
      .dispatch(enterName(name))
  }

  render() {
    return (
      <div>
        <div style={{
          height: '100%'
        }}>
          I am entry data component , i have input for user name
          <div style={{
            weight: "80%"
          }}>
            <input onChange={this.changeUserName}/> {this.props.children}
          </div>
          <Link to="/main">
            <button onClick={this.initData} type='button'>Exit to main
            </button>
          </Link>

        </div>
      </div>
    )
  }
}
export default connect(state => state)(EnterDataComponent)