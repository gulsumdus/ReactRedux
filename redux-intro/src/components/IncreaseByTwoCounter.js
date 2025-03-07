import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { increaseByTwoCounter } from '../redux/actions/counterActions'
import { connect } from 'react-redux'

class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={event => this.props.dispatch(increaseByTwoCounter())}> + 2</button>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(increaseByTwoCounter, dispatch) }
}
export default connect(mapDispatchToProps)(IncreaseByTwoCounter);// connect ile Redux store'u ile bu componente bağla