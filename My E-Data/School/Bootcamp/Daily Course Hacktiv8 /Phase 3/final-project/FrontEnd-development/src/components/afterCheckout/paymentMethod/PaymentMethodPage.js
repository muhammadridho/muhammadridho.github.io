import React, { Component } from 'react';
import {
  Body,
  Text,
  Content
} from 'native-base';
import {
  View,
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class PaymentMethodPage extends Component {

  render() {
    return (

        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
          <View style={{width: '80%'}}>
              <Text style={{ textAlign: 'center' }}>Silahkan transfer ke nomor rekening berikut</Text>
              <Text style={{ fontSize: 30, marginTop: 10, fontWeight:'bold', textAlign: 'center' }}>085274446252</Text>
              <Text style={{ textAlign: 'center' }}>Bank Mandiri</Text>
          </View>
        </View>


    );
  }
}

export default PaymentMethodPage
