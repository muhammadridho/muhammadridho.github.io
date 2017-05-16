import React from 'react'
import {Container, Text} from 'native-base'

import ProfileCard from '../contents/ProfileCard'
import ChartList from './ChartList'
import DetailCartEditPage from './DetailCartEditPage'

class Drawer extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Container style={{margin : 0, padding : 0}}>
        <ProfileCard navigation={this.props.navigation}/>
        <DetailCartEditPage navigation={this.props.navigation}/>
      </Container>
    )
  }
}

export default Drawer
