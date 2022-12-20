import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ADD_COUNTER, MIN_COUNTER, RESET_COUNTER } from '../actionTypes'

class Counter extends Component {
  add = () => {
    this.props.dispatch({ type: ADD_COUNTER })
  }

  less = () => {
    this.props.dispatch({ type: MIN_COUNTER })
  }

  reset = () => {
    this.props.dispatch({ type: RESET_COUNTER })
  }

  render() {
    return (
      <div>
        <button type='button' onClick={this.add}>
          Add + 1
        </button>
        &nbsp;&nbsp;
        <button type='button' onClick={this.less}>
          Sub - 1
        </button>
        &nbsp;&nbsp;
        <button type='button' onClick={this.reset}>
          Reset to 0
        </button>
        <br></br>
        <br></br>
        <h1>Counter : {this.props.count}</h1>
      </div>
    )
  }
}
//connects component with redux store state
const mapStateToProps = (state) => ({ count: state.counterApp.counter })

//connect function INJECTS dispatch function as a prop!!
export default connect(mapStateToProps)(Counter)
