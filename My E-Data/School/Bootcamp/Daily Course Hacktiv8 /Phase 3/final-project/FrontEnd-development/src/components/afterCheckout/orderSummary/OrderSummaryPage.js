import React, { Component } from 'react';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Right
} from 'native-base';
import { ScrollView, View } from 'react-native'
import { connect } from 'react-redux'

class OrderSummary extends Component {
  constructor(props){
    super(props)

  }
  render() {
    return (
      <Container>
        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          onScroll={() => { console.log(this.props.cartTotal); }}
          scrollEventThrottle={200}
        >
          <Content>
            <Card>
              <CardItem>
                <Text>{JSON.stringify(this.props.cartTotal)}</Text>
              </CardItem>
              <CardItem>
                 <Text>Transfer keno rek : 085274446252</Text>
               </CardItem>
               <CardItem>
                  <Text>Nama Bank : Bank Mandiri</Text>
                </CardItem>
            </Card>
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

// const mapStateToProps = (state) => ({
//   cartTotal : state.totalPriceAndQty
// })

// const mapDispatchToProps = (dispatch) => ({
//    searchKeywords : (keywords) => dispatch(searchKeywords(keywords))
// })

export default connect(null, null)(OrderSummary)
