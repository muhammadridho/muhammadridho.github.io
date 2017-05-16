import React from 'react'
import {Image, View} from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import Icon from 'react-native-vector-icons/Ionicons'
import {connect} from 'react-redux'

import { addToChart } from '../../actions/'
import { Card , CardItem, Left, Body, Text, Button, Right} from 'native-base'
class CardShop extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
     <View style={{flex : 1, flexBasis : '35%',  minWidth: '35%', maxWidth : '50%'}}>
       <Card >
             <CardItem>
                   <Right>
                   <Button onPress={() => this.props.addToChart(this.props.item)} style={{padding : 0}} iconRight primary rounded>
                     <Icon style={{fontSize : 18, color : '#fff'}}name='md-cart' />
                 </Button>
                   </Right>
              </CardItem>
             <CardItem style={{padding : 0,justifyContent : 'center', flex: 1}}>
               <Body>
                   <Image style={{width: '100%', height : 150}} source={{uri : this.props.item.image_url}} />
                       <Text style={{fontWeight : '200', fontSize : 12, textAlign : 'center'}}>{this.props.item.name}</Text>
                       <Text style={{fontWeight : '600', fontSize : 12, textAlign : 'center', color : '#3F51B5'}}>Rp. 12000</Text>
               </Body>
           </CardItem>
       </Card>
     </View>

   )

  }
}



const mapDispatchToProps = (dispatch) => ({
  addToChart : (payload) => dispatch(addToChart(payload))
})

export default connect(null, mapDispatchToProps)(CardShop)
