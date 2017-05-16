import React from 'react'
import { Provider } from 'react-redux'
import store from './stores'
import AfterCheckout from './components/afterCheckout/Main'

class AfterCheckoutScene extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <Provider store={store}>
        <AfterCheckout />
      </Provider>
    )
  }
}

export default AfterCheckoutScene
