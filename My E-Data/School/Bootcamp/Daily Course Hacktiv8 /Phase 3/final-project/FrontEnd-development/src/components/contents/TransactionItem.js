import React from 'react'
import {Text, Icon , Card, Right, CardItem, Badge} from 'native-base'

class TransactionItem extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (

        <CardItem style={{marginBottom : 5}}>
           <Icon active style={{color : '#01579B'}} name="md-cart" />
           <Text>Transaction ID : {this.props.item.id}
           </Text>
           <Right>
           <Badge
              style={{ backgroundColor: '#01579B' }}>
                <Text style={{ color: 'white' }}>{this.props.item.status}</Text>
           </Badge>
           </Right>
         </CardItem>

    )
  }
}

export default TransactionItem
