import React, { Component } from 'react';
import { connect } from "react-redux";

// Counter bileşeni
class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>  {/* counter'ı props üzerinden alıyoruz ve gösteriyoruz */}
      </div>
    );
  }
}

// Redux store'dan veriyi almak için mapStateToProps fonksiyonu
function mapStateToProps(state) {
  return { counter: state.counterReducer }; // Redux store'undaki counterReducer'ı 'counter' olarak bağlıyoruz
}

// connect ile Redux store'u ile Counter bileşenini bağla
export default connect(mapStateToProps)(Counter);
