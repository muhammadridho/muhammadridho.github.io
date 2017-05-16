import React from 'react'
import { connect } from 'react-redux'
import { Container, Content, List, ListItem, Thumbnail, Text, Body, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'

class ChartItem extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <ListItem>
        <Thumbnail square size={80} source={{uri : this.props.data.image_url}} />
        <Body>
          <Text>{this.props.data.name}</Text>
          <Text note>{this.props.data.price}</Text>
        </Body>
        <Button onPress={() => this.props.removeFromChart(this.props.data.id)} transparent rounded>
          <Icon style={{fontSize : 24}} name='md-trash' />
          </Button>
      </ListItem>
    )
  }
}



export default ChartItem
