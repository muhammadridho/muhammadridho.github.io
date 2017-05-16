import React from 'react'
import { View, ListView } from 'react-native'
import { Thumbnail, Text, Button, Icon } from 'native-base'
import TransactionItem from '../contents/TransactionItem'
class ProfileUser extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      transactions : [
        { id : '088', status : 'pending'},
        { id : '987', status : 'sending'}
      ],
      ds : new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }
  }
  render(){
    const dataSource = this.state.ds.cloneWithRows(this.state.transactions)
    return (
      <View style={{flex : 1}}>
        <View style={{width : '100%', height : 140, backgroundColor : '#0D47A1'}}>
        </View>
        <Thumbnail style={{marginLeft : '43%', marginTop : -100}} size={140} source={{uri : 'https://ssl.gstatic.com/images/branding/product/1x/avatar_square_blue_512dp.png'}} />
        <Text style={{marginTop : 10, textAlign : 'center', fontWeight : '400', color : '#fff'}}>
          User Names
        </Text>
        <Button style={{position : 'absolute', top : 0, left : 0}} transparent iconLeft light>
          <Icon name='arrow-back' />
        </Button>
        <View style={{flex : 1, padding : 5, marginTop : 12}}>
        {this.state.transactions.map(item => <TransactionItem item={item}/>)}

        </View>
        </View>
    )
  }
}
export default ProfileUser
