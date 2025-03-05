import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { increaseCounter } from '../redux/actions/counterActions' //fonksiyonu çağıriyoruz dispatch ile
import { connect } from 'react-redux' // redux'a bağlanıyoruz
class IncreaseCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={event=> this.props.dispatch(increaseCounter())}> + 1</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(increaseCounter, dispatch) }
}

// mapDispatchToProps: Aksiyonları React bileşenine props olarak geçirir.
//bindActionCreators: Aksiyon yaratıcılarını dispatch ile bağlar ve doğrudan çağırılmasını sağlar.
// Kodun amacı, increaseCounter aksiyonunun, React bileşeninde props.actions.increaseCounter() 
// olarak kullanılabilmesi için gerekli bağlantıyı kurmaktır.

export default connect(mapDispatchToProps)(IncreaseCounter);// connect ile Redux store'u ile bu componente bağla