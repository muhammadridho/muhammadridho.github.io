import React from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux'

class ProfileCard extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Card style={{ flex: 0, width : '100%' , borderRadius : 0, marginLeft : -1, marginTop: -5, marginRight: -2}}>
        <CardItem style={{padding : 0}}>
        {this.props.account.username == '' ? (
          <Body style={{flex : 1}}>
            <Image
              style={{width: 120, height: 120, marginLeft : '30%', marginTop: 10}}
              source={require('../../assets/notlogin.png')} />
            <Grid style={{justifyContent : 'center', marginBottom : 10, marginTop : -5}}>
            </Grid>
            <Button style={{marginLeft : 40}} onPress={() =>this.props.navigation.navigate('LoginContent')}rounded danger>
              <Text>Please login to continue</Text>
            </Button>
          </Body>
        )
        :
        (
          <Body style={{flex : 1}}>
            <Image
              style={{width: 380, height: 200, marginLeft : -20, marginTop: -10}}
              source={{uri : 'http://demo.geekslabs.com/materialize/v2.3/layout03/images/user-profile-bg.jpg'}} />
            <Image
              borderRadius={100}
              style={{width: 64, height: 64, position : 'absolute', top: 85, left : 100, marginTop : -40}}
              source={{uri : this.props.account.image_url}} />
            <Text style={{position : 'absolute', top : 120, left : '43%'}}>{this.props.account.name}</Text>
            <Button
              style={{ width : '50%', height : 30, position : 'absolute', top : 145, left : 60}}
              rounded
              success
              iconLeft
            >
            <Text style={{marginRight : '1%', color : '#fff', fontSize : 12, marginLeft : '10%', marginTop : -4}}>
              MY PROFILE
            </Text>
            </Button>
          </Body>
        )
        }
            <Grid style={{justifyContent : 'center', position : 'absolute', top : 0}}>
              <Col style={{height: 80, width : 120}}>
                <Button transparent iconLeft light>
                  <Icon name='arrow-back' />
                </Button>
              </Col>
            </Grid>
        </CardItem>
      </Card>
    )
  }
}

const mapStateToProps = (state) => ({
  account : state.account
})
export default connect(mapStateToProps, null )(ProfileCard)
