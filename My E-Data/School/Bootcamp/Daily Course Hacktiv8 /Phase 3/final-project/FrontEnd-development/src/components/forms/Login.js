import React  from 'react'
import FBSDK, {LoginManager, AccessToken} from 'react-native-fbsdk'
import {connect } from 'react-redux'
import axios from 'axios'

import { View, Text, Image, TextInput, TouchableOpacity, AsyncStorage} from 'react-native'
import { Button } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'
import Modal from 'react-native-animated-modal'
import styles from '../../styles/Login'
import {registerAccount, loginAccount} from '../../actions/'
import RegisterForm from './Register'


class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      modalVisible : false,
      email : '',
      password : '',
      position : 0,
      isModalFacebookVisible: false,
      isSuccess : false,
      textModal : '',
      imgModal : '',
      formRegister : false,
      username : ''
    }

     this._authLocal = this._authLocal.bind(this)
     this._requestLoginFacebook = this._requestLoginFacebook.bind(this)
     this._showModalFacebook = this._showModalFacebook.bind(this)
     this._hideModalFacebook = this._hideModalFacebook.bind(this)
  }

  _authLocal(payload){
    axios.post('http://buahtanganbackend-dev.ap-southeast-1.elasticbeanstalk.com/api/login', {
      username : this.state.username,
      password : this.state.password,
    }).then((response) => {
      console.log(response);
      this.setState({ isModalFacebookVisible: true, isSuccess : true, textModal : 'Success login !'})
      this.props.loginAccount({name : response.data.sentUser.name, image_url : response.data.sentUser.profilpicture, token : response.data.token})
      try {
        AsyncStorage.setItem('token', response.data.token);
      } catch (error) {
        console.log('error AsyncStorage',error);
      }
    }).catch((err) => {
      console.log(err);
      this.setState({ isModalFacebookVisible: true, isSuccess : false, textModal : 'Login Failed !'})
    })

      console.log('statusnya',this.state.isSuccess);
  }

  _register(payload){

  }

  _showModalFacebook(params){
    console.log('statusnya',this.state.isSuccess);
    this.setState({ isModalFacebookVisible: true, isSuccess : params.success, textModal : params.textModal, imgModal : params.imgModal})
  }

 _hideModalFacebook() {
   this.setState({ isModalFacebookVisible: false })
 }


  _authFacebook(){
    var self = this
    LoginManager.logInWithReadPermissions(['public_profile','email']).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          console.log('masuk sini',result.accessToken);
          var app = self
          AccessToken.getCurrentAccessToken()
                     .then((accessTokenData) => {
                       console.log('accessTokenData', accessTokenData.accessToken);
                       fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends,picture&access_token=' + accessTokenData.accessToken)
                         .then((response) => response.json())
                         .then((json) => {
                           console.log('response json',json);
                           var user = {}
                           // Some user object has been set up somewhere, build that user here
                           user.name = json.name
                           user.id = json.id
                           user.user_friends = json.friends
                           user.email = json.email
                           user.username = json.name
                           user.loading = false
                           user.loggedIn = true
                           user.picture = json.picture.data.url
                           app._requestLoginFacebook(user)
                         })
                         .catch((error) => {
                           console.log(error);
                         })
                     }, (error => {
                       console.log('Error nih' + error);
                     }))
        }
      },
    function(error) {
      alert('Login fail with error: ' + error);
    }
    )
  }

  _requestLoginFacebook(user){
    console.log(user)
    this.props.loginAccount({name : user.name, image_url : user.picture})
    this._showModalFacebook({success : true, textModal : 'Login Sukses !', imgModal : '../../assets/login_success.png'})
  }


  render(){
    return (
      <View style={styles.wrapper}>
        <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo.png')}
          />
          <Text style={styles.title}>Buah Tangan</Text>
          <Text>testing</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.container}>
            <TextInput
              placeholder="Email"
              underlineColorAndroid='transparent'
              placeholderTextColor="rgba(255,255,255,0.7)"
              style={styles.input}
              onChangeText={(text) => this.setState({username : text})}
            />
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              underlineColorAndroid='transparent'
              placeholderTextColor="rgba(255,255,255,0.7)"
              style={styles.input}
              onChangeText={(text) => this.setState({password : text})}
            />
            <Button onPress={this._authLocal.bind(this)} style={{ width : '100%'}} rounded success iconLeft>
                <Icon style={{marginLeft : '30%', color : '#fff', fontSize : 15}} name='md-log-in' />
                <Text style={{marginRight : '40%', color : '#fff'}}>Sign in</Text>
            </Button>
            <Button onPress={this._authFacebook.bind(this)} style={{ width : '100%', marginTop : 10}} rounded primary iconLeft>
            <Image
              style={{width : 24, height : 24, marginRight: 5, marginLeft : 30}}
              source={require('../../assets/facebook.png')}
              />
                <Text style={{marginRight : '40%', color : '#fff'}}>Sign in with facebook</Text>
            </Button>

            <TouchableOpacity onPress={() => this.setState({formRegister : true})} style={{marginLeft : '30%'}}>
              <Text style={{color : '#fff'}}>Do not have Account ?</Text>
            </TouchableOpacity>
          </View>

        </View>

        <Modal isVisible={this.state.isModalFacebookVisible}>

          {this.state.isSuccess == true ? (
          <View style={styles.modalFacebook}>
            <Image
              style={styles.logo}
              source={require('../../assets/login_success.png')}
              />
              <Text style={{fontWeight : '300', marginBottom : 20,color : '#607D8B', fontWeight : '400', fontSize : 25}}>{this.state.textModal}</Text>
              <Button onPress={() => {
                this._hideModalFacebook()
                this.props.navigation.navigate('MainContent')
              } }style={{textAlign : 'center', width : '60%', color : '#607D8B', fontSize : 20, marginLeft : '20%'}} rounded success>
                  <Text style={{color : '#fff', marginLeft: '23%'}}>LANJUT</Text>
              </Button>
          </View>
          ) :
          (
            <View style={styles.modalFacebook}>
            <Button onPress={this._hideModalFacebook} transparent primary iconLeft>
              <Icon style={{fontSize : 25, color : '#607D8B'}} name='md-close' />
            </Button>
            <Image
              style={styles.logo}
              source={require('../../assets/login_failed.png')}
              />
              <Text style={{fontWeight : '300', marginBottom : 20,color : '#607D8B', fontWeight : '400', fontSize : 25}}>{this.state.textModal}</Text>
              <Button onPress={() => this._hideModalFacebook() }style={{textAlign : 'center', width : '60%', color : '#607D8B', fontSize : 20, marginLeft : '20%'}} rounded success>
                  <Text style={{color : '#fff', marginLeft: '23%'}}>COBA LAGI</Text>
              </Button>
              </View>
          )}



        </Modal>
        <RegisterForm
          navigation={this.props.navigation}
          visible={this.state.formRegister}
          closeModal={() => this.setState({formRegister : false})}
        />
      </View>
    )
  }

}

const mapStateToProps = (state) => ({
  account : state.account
})

const mapDispatchToProps = (dispatch) => ({
  loginAccount : (payload) => dispatch(loginAccount(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
