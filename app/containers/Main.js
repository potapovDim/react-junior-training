import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class PropSCLass extends Component {

  render() {
    const propTitle = this.props.propTitle
    return (
      <div>
        nust return prop
        <div>{propTitle}</div>
      </div>
    )
  }
}

class Main extends Component {
  state = {
    greeting: 'hello',
    count: 1
  }

  changeGreeting = event => {
    /[a-z]/.test(event.target.value)
      ? this.setState({greeting: event.target.value})
      : this.setState({greeting: 'sorry , bad data'})
  }

  render() {
    const name = this.props.nameReducer.name
    return (
      <div>
        <h1>MAIN COMPONENT</h1>
        <div style={{height: '100%'}}>
          <h1>{name === ''? 'U dont enter your name': `Hello ${name}`}</h1>
          <div>
            In this input u can enter just letters
            <input onChange={this.changeGreeting}/>
          </div>
          <button
            onClick
            ={() => this.setState({
            count: this.state.count + 1
          })}>
            click me</button>
          <h1>{this.state.count}</h1>
          {this.state.greeting}
          <div style={{
            weight: "80%"
          }}>
            {this.props.children}
          </div>
          <PropSCLass propTitle={`Test Title ${this.state.count}`}/>

          <Link to="/entries">
            <button onClick={this.initData} type='button'>Go to enter name component
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(Main)