import React from 'react'
import {View, Text} from 'react-native'

class Sidebar extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <View style={{flex : 1, width : '80%', height :'40%'}}>
        <Text>Testing</Text>
      </View>
    )
  }
}

export default Sidebar
