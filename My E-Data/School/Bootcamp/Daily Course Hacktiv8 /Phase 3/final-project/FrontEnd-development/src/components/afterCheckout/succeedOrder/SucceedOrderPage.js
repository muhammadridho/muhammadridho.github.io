import React, { Component } from 'react';
import {
  Body,
  Text,
  Content,
  Button
} from 'native-base';
import {
  View,
  StyleSheet,
  Image
} from 'react-native'

import ButtonStatus from './ButtonStatus'

class SucceedPage extends Component {

  render() {
    return (

      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
        <View style={{width: '80%'}}>
          <Text style={{ textAlign: 'center' }}>Terima kasih telah berbelanja! Silahkan Transfer Sesuai dengan jumlah nominal yang tertera</Text>
        </View>
        <View style={{width: '80%', marginTop: 30}}>
          <Text style={{fontWeight: 'bold', fontSize: 23, textAlign: 'center' }}>Rp. 20000</Text>
        </View>
        <View style={{width: '80%', marginTop: 30}}>
          <Text style={{fontSize: 14, textAlign: 'center' }}>Your status payment</Text>
        </View>
        <View style={{width: '80%', marginTop: 10}}>
          <ButtonStatus />
        </View>
      </View>


    );
  }
}

export default SucceedPage
