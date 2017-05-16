import React from 'react'
import { Provider } from 'react-redux'
import store from './stores'
import ProfileUser from './components/forms/ProfileUser'

class ProfileScene extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <Provider store={store}>
        <ProfileUser navigation={this.props.navigation}/>
      </Provider>
    )
  }
}

export default ProfileScene
