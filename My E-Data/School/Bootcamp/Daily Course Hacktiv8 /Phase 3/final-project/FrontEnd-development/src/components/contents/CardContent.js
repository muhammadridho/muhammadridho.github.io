import React from 'react'
import { Image, ScrollView, View, ListView} from 'react-native'
import { Card, Body, Text, Left, Button, Icon } from 'native-base'
import CardItem from './CardItem'
import { Col, Row, Grid } from "react-native-easy-grid";

class CardContent extends React.Component{
  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }



  render(){
    return(
      <View style={{display : 'flex', flexWrap : 'wrap', flexDirection : 'row'}}>
        {this.props.items.map((item) => <CardItem item={item}/>)}
      </View>

    )
  }
}
export default CardContent
