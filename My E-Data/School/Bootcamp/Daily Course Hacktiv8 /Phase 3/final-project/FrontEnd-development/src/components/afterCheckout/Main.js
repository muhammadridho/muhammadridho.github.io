import React, { Component } from 'react';
import {
  Container,
  Content,
  Text
} from 'native-base';
import { ScrollView, View } from 'react-native'
import { connect } from 'react-redux'

import FooterPage from './FooterPage'
import HeaderPage from './HeaderPage'
import DetailCartListPage from './detailCart/DetailCartListPage'
import StepIndicatorPage from './stepIndicatorTransaction/Main'
import PaymentMethodPage from './paymentMethod/PaymentMethodPage'
import OrderSummaryPage from './orderSummary/OrderSummaryPage'
import SucceedOrderPage from './succeedOrder/SucceedOrderPage'
import PickUpItemPlacePage from './pickUpItemPlace/Main'

class AfterCheckout extends Component {
  constructor(props){
    super(props)
  }

  render() {

    const currentPage = this.props.currentPage
    return (
      <Container>
        <HeaderPage />
        <StepIndicatorPage />
        {
         currentPage == 1
         ? <DetailCartListPage />
         : (currentPage == 2 ? <PickUpItemPlacePage />
           : ( currentPage == 3 ? <PaymentMethodPage />
             :( currentPage == 4 ? <OrderSummaryPage />
               : <SucceedOrderPage /> )))
        }
        <FooterPage />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  currentPage : state.step.page
})

export default connect(mapStateToProps, null)(AfterCheckout)
