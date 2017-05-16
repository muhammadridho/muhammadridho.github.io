import React from 'react';
import { Image } from 'react-native'
import { Container, Content, ListItem, Text, CheckBox, Header, Left, Title, Button, Body, Right} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from '../../styles/Main'
import { Col, Row, Grid } from "react-native-easy-grid";
import { addLocation } from '../../actions/'
import {connect } from 'react-redux'

class MainHeader extends React.Component {
    constructor(props){
      super(props)
    }

    componentDidMount(){
      this.props.addLocation({city : this.props.city, latitude : this.props.coords.latitude, longitude : this.props.coords.longitude})
      console.log('lokasinya',this.props.location)
    }

    render() {
        return (
                <Header style={{backgroundColor : '#fff'}}>
                    <Left>
                      <Image style={{width : 34, height : 34}} source={require('../../assets/placeholder.png')} />
                    </Left>
                    <Body style={{marginLeft : -50}}>
                    <Text style={styles.city}>{this.props.location.city}</Text>
                    </Body>
                    <Right>
                        <Button onPress={() => this.props.openSidebar()}transparent>
                            <Image style={{width : 34, height : 34}} source={require('../../assets/bag.png')} />
                        </Button>
                    </Right>
                </Header>
        );
    }
}

const mapStateToProps = (state) => ({
  location : state.location
})

const mapDispatchToProps = (dispatch) => ({
  addLocation : (payload) => dispatch(addLocation(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(MainHeader)

//
