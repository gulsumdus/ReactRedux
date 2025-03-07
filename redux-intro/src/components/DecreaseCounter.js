import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { decreaseCounter } from '../redux/actions/counterActions'//fonksiyonu cagiriyoruz action'dan
import { connect } from 'react-redux'
 class DecreaseCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={event => this.props.dispatch(decreaseCounter())}> - 1</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return{actions: bindActionCreators(decreaseCounter,dispatch)}
}

export default connect(mapDispatchToProps)(DecreaseCounter);//store ile bu componenti bağladık