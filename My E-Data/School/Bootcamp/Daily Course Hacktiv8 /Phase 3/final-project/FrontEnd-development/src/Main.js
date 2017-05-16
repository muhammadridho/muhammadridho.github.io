'use strict'

/**
 * MainScene, Main Index will give you location
 */

 import React from 'react';
 import {
   Text,
   View,
   DrawerLayoutAndroid
 } from 'react-native'
 import { Container, Content, Drawer} from 'native-base'

 import styles from './styles/Main'
 import axios from 'axios'
 import { StackNavigator } from 'react-navigation'
 import { Provider} from 'react-redux'
 import store from './stores'
 import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";

 import MainHeader from './components/headers/MainHeader'
 import MainFooter from './components/footers/MainFooter'
 import MainContent from './components/contents/MainContent'
 import DrawerContainer from './components/sidebars/drawer'

 import SideBar from './components/forms/Sidebar'
 import {requestPermission} from 'react-native-android-permissions';
 import Modal from 'react-native-animated-modal';

 class Main extends React.Component {
   constructor(props){
     super(props)
     this.state = {
       initialPosition: 'unknown',
       lastPosition: 'unknown',
       watchID: 0 || null,
       coordinates : 'unknown',
       city : 'unknown',
       drawer : false,
       currentPage : 0,
       latitude : 0,
       longitude : 0
     }
     this.requestLocation = this.requestLocation.bind(this)
     this.getCity = this.getCity.bind(this)
     this.setPage = this.setPage.bind(this)
     this.setPosition = this.setPosition.bind(this)
   }

   setPosition(number){
     this.setState({currentPage : number})
   }

   getCity(latitude,longitude){
     console.log('koordinat',latitude,longitude);
     var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng="
      +latitude+","+longitude+"&sensor=false"
      var self = this
     axios.get(url).then((response) => {
       var city = ''
       var state = ''
       var results = response.data.results
       for (var i = 0; i < results.length; i++) {
						if (results[i].types[0] === "administrative_area_level_1") {
							 city = results[i].address_components[0].short_name;
						}
					}
          self.setState({city,latitude, longitude})
     }).catch((err) => console.log(err))
   }

   requestLocation(){
     navigator.geolocation.getCurrentPosition(
       (position) => {
         var initialPosition = JSON.stringify(position);
         this.setState({initialPosition : position});
         this.setState({coordinates : position.coords})
         let latitude = position.coords.latitude
         let longitude = position.coords.longitude

         this.getCity(latitude,longitude)
       },
       (error) => alert(JSON.stringify(error)),
       {timeout: 20000, maximumAge: 1000}
     );
     this.state.watchID = navigator.geolocation.watchPosition((position) => {
       this.setState({lastPosition : position});
     })
   }



   componentWillMount() {
     var self = this
     setTimeout(() => {
      requestPermission("android.permission.ACCESS_FINE_LOCATION").then((result) => {
        console.log("Granted!", result);
        self.requestLocation()
        // now you can set the listenner to watch the user geo location
      }, (result) => {
        console.log("Not Granted!");
        console.log(result);
      });
    // for the correct StatusBar behaviour with translucent={true} we need to wait a bit and ask for permission after the first render cycle
    // (check https://github.com/facebook/react-native/issues/9413 for more info)
    }, 0);

   }

   componentWillUnmount() {
     navigator.geolocation.clearWatch(this.watchID);
   }



   setPage(number){
     console.log('klik', number);
    this.setState({currentPage : number})
   }

   closeDrawer(){
        this.drawer._root.close()
    };

    openDrawer(){
      console.log('JALAN');
      this.drawer.openDrawer()
    };


   openSidebar(){
     console.log('open sidebar')
     this.openDrawer()
   }

   render() {
     let mainRender
     if (this.state.city == 'unknown') {
       mainRender = (
         <View>
         <Text style={styles.welcome}>
           Welcome to React Native!
         </Text>
         <Text style={styles.instructions}>
           To get started, edit index.android.js
         </Text>
         <Text style={styles.instructions}>
           Double tap R on your keyboard to reload,{'\n'}
           Shake or press menu button for dev menu
         </Text>
         <Text>
             belum dapat
         </Text>
         </View>
       )
     }else {
       mainRender = (
        <MainHeader openSidebar={this.openSidebar.bind(this)}  city={this.state.city} coords={{longitude : this.state.longitude, latitude : this.state.latitude}}/>
       )
     }

     return(
       <Provider store={store}>
       
           <DrawerLayoutAndroid

              ref={(component) => this.drawer = component}
              drawerWidth={300}
              drawerPosition={DrawerLayoutAndroid.positions.Left}
              renderNavigationView={() => <DrawerContainer navigation={this.props.navigation}/>}>
              <Container>
              {mainRender}
              <MainContent state={this.state} setPosition={this.setPosition}/>
              <MainFooter clickButton={this.setPage}/>
            </Container>
          </DrawerLayoutAndroid>

        </Provider>
     )
   }
 }



 export default Main
