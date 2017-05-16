import React, { Component } from 'react';
import {
  Left,
  Right,
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Body,
  Button,
  Icon
} from 'native-base';
import { ScrollView, View } from 'react-native'
import { connect } from 'react-redux'

import { addToChart, removeFromCart } from '../../actions'

class DetailEditCart extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <Container>
        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          onScroll={() => { console.log('onScroll!'); }}
          scrollEventThrottle={200}
        >
          <Content>
            {this.props.cart.cartSummary.map((item, index) =>
              {
                return (<View key={index}>
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={{uri: item.image_url}} />
                  </Left>
                  <Body>
                    <Text>{item.name}</Text>
                    <Text note>Rp. {item.price}</Text>
                    <Text style={{marginTop: 15}} >Quantity : {item.qty}</Text>
                  </Body>
                  <Right>
                    <Text note>Total </Text>
                    <Text>Rp. {item.qty * item.price}</Text>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                      <Button
                        small
                        primary
                        onPress = {() => {
                          return this.props.addToCart(item)
                        }}
                      >
                        <Text>+</Text>
                      </Button>
                      <View style={{marginLeft: 15}}>
                        <Button
                          small
                          primary
                          onPress = {() => {
                            return this.props.removeFromCart(item)
                          }}
                        >
                          <Text>-</Text>
                        </Button>
                      </View>
                    </View>
                  </Right>
                </ListItem>
              </View>)}
            )}
            <View style={{width: '90%', marginLeft:15, marginTop:30, marginBottom:30}}>
              <Button
                block
                onPress= {()=> this.props.navigation.navigate('AfterCheckoutContent')}
              >
                <Text>Check Out</Text>
              </Button>
            </View>
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  cart : state.charts
})

const mapDispatchToProps = (dispatch) => ({
  addToCart : (item) => dispatch(addToChart(item)),
  removeFromCart : (item) => dispatch(removeFromCart(item))
})


export default connect(mapStateToProps, mapDispatchToProps)(DetailEditCart)
