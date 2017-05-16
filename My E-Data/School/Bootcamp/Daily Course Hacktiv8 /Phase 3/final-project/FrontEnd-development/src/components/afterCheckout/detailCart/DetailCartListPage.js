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

class DetailCartListPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      productsBought : [] // jenis product yang dibeli
    }
  }

  quantityCounter(cart){
    let productsBought = cart.reduce((acc, curr, index, array) => {

      let indexItem = acc.findIndex((e) => e.id === curr.id)

      if(indexItem > -1){
        acc[indexItem].qty++
        return acc
      }else {
        let objItem = Object.assign({}, { ...curr}, {'qty': 1})
        acc.push(objItem)
        return acc
      }

    }, [])
    console.log(productsBought);
    this.setState({productsBought})
  }

  componentWillMount(){
    this.quantityCounter(this.props.cartItems)
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
            {this.state.productsBought.map((item, index) =>
              <View key={index}>
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={{uri: item.image_url}} />
                  </Left>
                  <Body>
                    <Text>{item.name}</Text>
                    <Text note>@ Rp. {item.price}</Text>
                    <Text style={{marginTop: 10}} >Quantity : {item.qty}</Text>
                  </Body>
                  <Right>
                    <Left>
                      <Text note>Total</Text>
                    </Left>
                    <Text>Rp. {item.qty * item.price} </Text>
                    <View style={{flexDirection: 'row', marginTop: 20}}>
                    </View>
                  </Right>
                </ListItem>
              </View>
            )}
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems : state.charts.cartItems
})


export default connect(mapStateToProps, null)(DetailCartListPage)
