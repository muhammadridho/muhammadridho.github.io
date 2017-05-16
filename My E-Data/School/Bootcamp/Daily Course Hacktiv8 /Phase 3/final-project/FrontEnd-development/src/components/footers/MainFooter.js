import React from 'react'
import { connect } from 'react-redux'

import {Image, StyleSheet } from 'react-native'
import { Container, Content, Footer, FooterTab, Button, Text,  Tab, Tabs , TabHeading} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import { fetchFood, fetchItem, fetchSnack, cleanSearch } from '../../actions/'

class MainFooter extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Footer style={StyleSheet.flatten(styles.footer)}>
      <FooterTab>
          <Button onPress={() => {
            this.props.clickButton(0)
            console.log('jalan untuk button fetchFood');
            this.props.fetchFood(this.props.location.city)
            this.props.cleanSearch()
          }}>
             <Image style={{width : 42, height : 42}}source={require('../../assets/taco.png')} />
             <Text style={{marginTop : -10}}>Snack</Text>
          </Button>
          <Button onPress={() => {
            this.props.clickButton(1)
            this.props.fetchSnack(this.props.location.city)
            this.props.cleanSearch()
          }}>
            <Image style={{width : 32, height : 32}}source={require('../../assets/salad.png')} />
            <Text style={{marginTop : 0}}>Food</Text>
          </Button>
          <Button onPress={() => {
            this.props.clickButton(2)
            this.props.cleanSearch()
          }}>
            <Image style={{width : 32, height : 32}}source={require('../../assets/souvenirs.png')} />
            <Text style={{marginTop : 0}}>Accesories</Text>
          </Button>
        </FooterTab>
    </Footer>
    )
  }
}

const styles = {
  footer : {
    backgroundColor : "transparent"
  }
}

const mapStateToProps = (state) => ({
  account : state.account,
  location : state.location
})

const mapDispatchToProps = (dispatch) => ({
  fetchFood : (payload) => dispatch(fetchFood(payload)),
  fetchSnack : (payload) => dispatch(fetchSnack(payload)),
  fetchItem : (payload) => dispatch(fetchItem(payload)),
  cleanSearch : (payload) => dispatch(cleanSearch())
})
export default connect(mapStateToProps, mapDispatchToProps)(MainFooter)
