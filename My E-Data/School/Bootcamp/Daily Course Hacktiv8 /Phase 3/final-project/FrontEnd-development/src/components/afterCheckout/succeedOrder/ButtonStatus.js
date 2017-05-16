import React, { Component } from 'react';
import axios from 'axios'
import {
  Button,
  Text
} from 'native-base';
import 
import { connect } from 'react-redux'

class ButtonStatus extends Component {
  checkout(){
    var self = this
      axios.post('http://buahtanganbackend-dev.ap-southeast-1.elasticbeanstalk.com/api/checkout', {
        token : this.props.account.token,
        cartItem : this.props.charts
      }).then(response => console.log(response))
        .catch(err => console.log(err))
  }
  render() {
    return (
      <Button onPress={() => this.checkout()} block warning>
        <Text>Unpaid</Text>
      </Button>
    );
  }
}

const mapStateToProps = (state) => ({
  currentPage : state.step.page,
  account : state.account,
  charts : state.charts.cartItems
})

export default connect(mapStateToProps, null)(ButtonStatus)
