import React from 'react'
import { AppRegistry, StyleSheet, View, Text, Image , TextInput, TouchableOpacity, Icon , Modal} from 'react-native'
import ViewPager from 'react-native-viewpager'
import StepIndicator from 'react-native-step-indicator'
import styles from '../../styles/Login'
import ImagePicker from 'react-native-image-picker'
import axios from 'axios'
import ModalRegister from 'react-native-animated-modal'
import PopupDialog from 'react-native-popup-dialog'
import { Button } from 'native-base'
import Popup from 'react-native-popup';

var options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}

class RegisterForm extends React.Component {
  constructor(props){
    super(props)
    this.setPosition = this.setPosition.bind(this)

    var dataSource = new ViewPager.DataSource({
        pageHasChanged: (p1, p2) => p1 !== p2,
      })

    this.state = {
      dataSource: dataSource.cloneWithPages(['Page 1', 'Page 2', 'Page 3']),
      currentPage:0,
      avatarSource  : 'https://ssl.gstatic.com/images/branding/product/1x/avatar_square_blue_512dp.png',
      email : '',
      password : '',
      name : '',
      username : '',
      success : false,
      textModal : '',
      isModalRegister : false,
      text : ''
    }
    this.registerNow = this.registerNow.bind(this)
    this.uploadPhotoProfile = this.uploadPhotoProfile.bind(this)
  }

  componentWillReceiveProps(nextProps){
    console.log('ada yang baru',nextProps);
  }

  setPosition(number){
    this.setState({currentPage : number})
  }

  registerNow(){
    var self = this
    console.log('jalan');
    console.log('data yang ingin dikirim',`nama : ${this.state.name} username : ${this.state.username} email : ${this.state.email} password : ${this.state.password}`);

    axios.post('http://buahtanganbackend-dev.ap-southeast-1.elasticbeanstalk.com/api/register', {
      username : this.state.username,
      email : this.state.email,
      password : this.state.password,
      name : this.state.name,
      profil_picture_url : this.state.avatarSource
    }).then((response) => {
      console.log('hasil register',response.data);
      let success = false,
          text = ''
      if (response.data.errors.length != 0 ){

        console.log('jalan error');
        success = false
        text = 'Failed Register, Check '
        self.setState({success : success, text : text, isModalRegister : true})
        self.popupDialog.show(true);

      }

      console.log('bawah jalaan');


    }).catch((err) => {
      console.log(err);
    })

    this.setState({success : true, text : 'success register', isModalRegister : true})
    this.popupDialog.show(true);
  }

  showUploadFile(){
          ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled image picker');
        }
        else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
          // let source = { uri: response.uri };

          // You can also display the image using data:
          this.uploadPhotoProfile('data:image/jpeg;base64,' + response.data)
        }
      });
    }

    uploadPhotoProfile(source){
      var self = this
      axios.post('http://buahtanganbackend-dev.ap-southeast-1.elasticbeanstalk.com/api/upload',{
        name : 'avatar',
        data : source
      }).then((response) => {
        console.log(response.data)
        self.setState({avatarSource : response.data.Location})

      }).catch(err => console.log('error', err))
    }

  clearState(){
    this.setState({username : '', email : '', password : '', success : false, currentPage : 0})
  }

  closeModal(){
    this.popupDialog(false)
  }


  render(){
    return(
      <Modal
         animationType={"slide"}
         transparent={false}
         visible={this.props.visible}
         onRequestClose={() => this.props.closeModal()}
         >
        <View style={styles.wrapper}>
          <View style={styles.stepIndicator}>
            <StepIndicator stepCount={2}
            customStyles={styles.IndicatorStyles}
            currentPosition={this.state.currentPage}
            labels={["Your identity?","Your Photo"]} />
          </View>
          <ViewPager
            style={{zindex : 999}}
            dataSource={this.state.dataSource}
            renderPage={this.renderViewPagerPage.bind(this)}
            onChangePage={(page) => {this.setState({currentPage:page})}}
            />
        </View>
        <PopupDialog
        style={{flex: 1, marginLeft : 5, marginRight : 5}}
         ref={(popupDialog) => { this.popupDialog = popupDialog; }}

       >

             {this.state.success == true ? (
               <View style={styles.modalFacebook}>
               <Image
                 style={styles.logo}
                 source={require('../../assets/login_success.png')}
                 />
                 <Text style={{fontWeight : '300', marginBottom : 20,color : '#607D8B', fontWeight : '400', fontSize : 25}}>{this.state.text}</Text>
                 <Button onPress={() => {
                   this.props.closeModal()
                   this.popupDialog.dismiss()
                   this.clearState()
                 }}style={{textAlign : 'center', width : '60%', color : '#607D8B', fontSize : 20, marginLeft : '20%'}} rounded success>
                     <Text style={{color : '#fff', marginLeft: '23%'}}>NEXT REGISTER</Text>
                 </Button>
                 </View>
             ) :
             (
               <View style={styles.modalFacebook}>
               <Image
                 style={styles.logo}
                 source={require('../../assets/login_failed.png')}
                 />
                 <Text style={{fontWeight : '300', marginBottom : 20,color : '#607D8B', fontWeight : '400', fontSize : 25}}>{this.state.text}</Text>
                 <Button onPress={() => {
                   this.popupDialog.dismiss()
                   this.clearState()
                 }}style={{textAlign : 'center', width : '60%', color : '#607D8B', fontSize : 20, marginLeft : '20%'}} rounded success>
                     <Text style={{color : '#fff', marginLeft: '23%'}}>TRY AGAIN</Text>
                 </Button>
              </View>
             )}



         </PopupDialog>

      </Modal>
    )
  }

  renderViewPagerPage(data){
    console.log('ini jalan');
    console.log(this.state.currentPage);
    return(
    <View style={styles.page}>
    {this.state.currentPage == 0 && (
      <View style={styles.formContainer}>
        <View style={styles.container}>
          <TextInput
            placeholder="Username"
            underlineColorAndroid='transparent'
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={styles.input}
            onChangeText={(text) => this.setState({username : text})}
          />
          <TextInput
            placeholder="Email"
            underlineColorAndroid='transparent'
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={styles.input}
            onChangeText={(text) => this.setState({email : text})}
          />
          <TextInput
            placeholder="Password"
            underlineColorAndroid='transparent'
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={styles.input}
            onChangeText={(text) => this.setState({password : text})}
          />
          <TouchableOpacity onPress={() => this.setState({currentPage : 1}) }
            style={styles.registerButton}>
            <Text style={styles.buttonText}>Next Step</Text>
          </TouchableOpacity>
        </View>
      </View>
    )}
    {this.state.currentPage == 1 && (
      <View style={styles.formContainer}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
            borderRadius={100}
            style={styles.avatarProfiles}
            source={{uri : this.state.avatarSource}}/>
          </View>
          <TextInput
            placeholder="Name"
            underlineColorAndroid='transparent'
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={styles.input}
            onChangeText={(text) => this.setState({name : text})}
          />
          <Text>{this.state.avatarSource.uri}</Text>
          <TouchableOpacity onPress={() => this.showUploadFile()} style={styles.facebookButton}>
            <Text style={styles.buttonText}>Upload Image</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({currentPage : 2}) }
            style={styles.registerButton}>
            <Text style={styles.buttonText}>Next Step</Text>
          </TouchableOpacity>
        </View>
      </View>
    )}
    {this.state.currentPage == 2 && (
        <View style={styles.formContainer}>
          <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
            borderRadius={100}
            style={styles.avatarProfiles}
            source={require('../../assets/login_success.png')}/>
          </View>
          <TouchableOpacity onPress={() => this.registerNow()}
            style={styles.registerButton}>
            <Text style={styles.buttonText}>Register Now</Text>
          </TouchableOpacity>

        </View>
        </View>
    )}
    </View>

  )}
}

export default RegisterForm
