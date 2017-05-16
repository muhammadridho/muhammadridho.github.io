import React from 'react'
import { Provider } from 'react-redux'
import store from './stores'
import Login from './components/forms/Login'

class LoginScene extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <Provider store={store}>
        <Login navigation={this.props.navigation}/>
      </Provider>
    )
  }
}

export default LoginScene
